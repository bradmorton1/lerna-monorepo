#!/usr/bin/env python
"""
A small utility script that builds multiple Docker containers within a single git repository using travis-ci.
"""
import logging
import os
import subprocess


logging.basicConfig(level=logging.INFO)
commit_range = os.environ.get('TRAVIS_COMMIT_RANGE', '').replace('...', '..')
if not commit_range:
	logging.warn('Could not find a commit range, not doing anything.')
else:
	logging.info('Finding all containers that changed in %s', commit_range)
	diff_lines = subprocess.check_output(['git', 'diff', '--name-only', commit_range]).split()
	changed_folders = {os.path.dirname(line) for line in diff_lines if os.path.dirname(line)}
	logging.info('The following folders contain changes: %s', changed_folders)
	for changed_folder in changed_folders:
		dockerfile = os.path.join(changed_folder, 'Dockerfile')
		if os.path.exists(dockerfile):
			logging.info('Building container for %s', dockerfile)
			subprocess.check_call(['docker', 'build', dockerfile])