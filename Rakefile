task :default => :guard
 

task :build do
  bundle 'sassc -t compressed lib/sass/style.scss > content/css/style.css'
  bundle 'nanoc'
end
 
desc 'Start guard'
task :guard do
  bundle 'guard'
end

def bundle(opts = '')
  sh 'bundle exec ' + opts
end
