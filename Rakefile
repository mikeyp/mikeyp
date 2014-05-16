task :default => :guard
 
desc 'Build the site'
task :build do
  bundle 'sassc -t compressed lib/sass/style.scss > content/css/style.css'
  bundle 'nanoc'
end
 
desc 'Clean the output directory'
task :clean do
  sh 'rm -rf output'
end

desc 'Start guard'
task :guard do
  bundle 'guard'
end

def bundle(opts = '')
  sh 'bundle exec ' + opts
end
