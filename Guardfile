# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'nanoc' do
  watch('nanoc.yaml') # Change this to config.yaml if you use the old config file name
  watch('Rules')
  watch(%r{^(content|layouts|lib)/.*$})
end

guard 'webrick', :host => '127.0.0.1', :port => '3333', :docroot => 'output' do
end

guard 'livereload' do
  watch(%r{output/.+\.(css|js|html)})
end

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
guard :shell, all_on_start: true do
  watch(/.*\.scss$/) do |m|
    `sassc -l lib/sass/style.scss > content/css/style.css`
  end
end
