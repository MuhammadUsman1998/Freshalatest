server '173.249.30.193', user: 'live', roles: %w{app web}, port: 8282

set :application, 'freshaClientFrontEnd'

set :deploy_to, '/home/live/FreshaClientFrontEnd'

set :repo_url, 'ssh://git@gitrepos.com:222/javascript/FreshaClientFrontend.git'

set :tmp_dir, '/home/live/tmp'

set :bundle_without, %w{development test}.join(' ')
