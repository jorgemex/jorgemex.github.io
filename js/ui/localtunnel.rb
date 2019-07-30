requiere 'optparse'

options = {: subdomain => 'jorgemex',: port => 80}

parser = OptionParser.new do | opts | opts.banner = "Uso: localtunnel.rb [opciones]" opts.on ('- s', '--subdominio subdominio', 'Subdominio') hacer | subdominio | opciones [: subdominio] = subdominio; fin

opts.on ('- p', '--port port', 'Port') do | port | opciones [: puerto] = puerto; fin

opts.on ('- h', '--help', 'Displays Help') do pone opts exit end end end

parser.parse!

def ordinal (número) número_abs = número.a_i.abs

if (11..13) .include? (abs_number% 100) "th" else case abs_number% 10 cuando 1; "st" cuando 2; "nd" cuando 3; "rd" más "th" fin fin fin

def ordinalize (número) "# {number} # {ordinal (number)}" end

launch_count = 0