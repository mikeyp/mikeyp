task :default => :guard
 

task :build do
  bundle 'compass compile -e production --force -s compressed'
  bundle 'nanoc'
end
 
desc 'Start guard'
task :guard do
  bundle 'guard'
end

def bundle(opts = '')
  sh 'bundle exec ' + opts
end
