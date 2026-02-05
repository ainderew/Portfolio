# fzf opens in neovim and formatted preview
alias f='nvim $(fzf -m --preview="bat --style=numbers --color=always {}")'

# CD to common paths
function c {
  if [ "$1" = "projects" ]; then
    cd ~/projects
  elif [ "$1" = "theoria" ]; then
    cd ~/theoria_repos/
  elif [ "$1" = "cs" ]; then
    cd ~/theoria_repos/tm-chateasy-server/ && nvim .
  elif [ "$1" = "cc" ]; then
    cd ~/theoria_repos/tm-chateasy-client/ && nvim .
  elif [[ "$1" = "bb" ]]; then
    code ~/projects/brainbloom
    code ~/projects/brainbloom-server
  else
    echo "Unknown directory"
  fi
}

# Switch feature branches
function sft() {
  if [ -z "$1" ]; then
    echo "Usage: gft <ticket-number>"
    return 1
  fi
  git switch "feature/CHART-$1"
}

# Create feature branches
function cft() {
  if [ -z "$1" ]; then
    echo "Usage: gft <ticket-number>"
    return 1
  fi
  git checkout -b "feature/CHART-$1"
}

# Chrome open
function oc() {
  if [ "$1" = "." ]; then
    open -a "Google Chrome" http://localhost:4100
  fi
}

function open_prod() {
  ssh -i ~/.ssh/tm-andrew -t azureuser@20.120.19.74
}

# DEV 1
alias ssh_dev="ssh -i ~/.ssh/tm-andrew james@206.189.168.89"

# DEV 2
alias ssh_dev2="ssh -i ~/.ssh/tm-andrew theoria@157.230.55.160"
alias ssh_dev2b="ssh -i ~/.ssh/tm-andrew theoria@161.35.229.196"

# DEV 3
alias ssh_dev3="ssh -i ~/.ssh/tm-andrew theoria@143.198.77.239"

# DEV SERVERS
alias ssh_dev4="ssh -i ~/.ssh/tm-andrew theoria@64.227.100.220"
alias ssh_dev5="ssh -i ~/.ssh/tm-andrew theoria@137.184.6.146"
alias ssh_dev6="ssh -i ~/.ssh/tm-andrew theoria@137.184.238.228"
alias ssh_dev7="ssh -i ~/.ssh/tm-andrew theoria@164.92.104.54"
alias ssh_dev8="ssh -i ~/.ssh/tm-andrew theoria@164.92.72.120"
alias ssh_dev9="ssh -i ~/.ssh/tm-andrew theoria@143.198.128.212"
alias ssh_dev10="ssh -i ~/.ssh/tm-andrew theoria@146.190.40.125"
alias ssh_dev11="ssh -i ~/.ssh/tm-andrew theoria@143.198.136.159"

# STAGING
alias ssh_staging="ssh -i ~/.ssh/tm-andrew james@178.128.76.4"
alias ssh_staging2="ssh -i ~/.ssh/tm-andrew james@165.227.29.32"

# BETA
alias ssh_beta="ssh -i ~/.ssh/tm-andrew azureuser@172.210.34.204"

# Production ChatEasy Server
alias ssh_server_0="ssh -i ~/.ssh/tm-andrew -t azureuser@20.120.19.74"
alias ssh_server_1="ssh -i ~/.ssh/tm-andrew -t azureuser@13.68.187.112"
alias ssh_server_2="ssh -i ~/.ssh/tm-andrew -t azureuser@20.127.14.169"
alias ssh_server_3="ssh -i ~/.ssh/tm-andrew -t azureuser@4.227.158.17"
alias ssh_server_4="ssh -i ~/.ssh/tm-andrew -t azureuser@52.191.59.203"

# Production ChatEasy Client
alias ssh_client="ssh -i ~/.ssh/tm-andrew azureuser@20.228.229.234 -t 'cd /var/web/tm-chateasy-client; exec bash'"

# PRODUCTION TM-Admin-Server
alias ssh_admin_server0="ssh -i ~/.ssh/tm-andrew james@13.68.196.103"
alias ssh_admin_server1="ssh -i ~/.ssh/tm-andrew azureuser@40.76.1.234"
alias ssh_admin_server3="ssh -i ~/.ssh/tm-andrew azureuser@20.85.229.54"
alias ssh_admin_server4="ssh -i ~/.ssh/tm-andrew azureuser@48.216.219.163"

# PRODUCTION TM-Admin-Client
alias ssh_admin_client="ssh -i ~/.ssh/tm-andrew james@13.92.103.11"

# PROD INTRANET
alias ssh_intra_server="ssh -i ~/.ssh/tm-andrew james@40.117.121.181"
alias ssh_intra_client="ssh -i ~/.ssh/tm-andrew james@52.249.183.8"

# PROD CHART EASY (Server)
alias ssh_chart_server0="ssh -i ~/.ssh/tm-andrew azureuser@52.255.190.73"
alias ssh_chart_server1="ssh -i ~/.ssh/tm-andrew azureuser@13.90.91.138"
alias ssh_chart_server2="ssh -i ~/.ssh/tm-andrew azureuser@52.186.73.52"
alias ssh_chart_server3="ssh -i ~/.ssh/tm-andrew azureuser@13.90.115.86"
alias ssh_chart_server4="ssh -i ~/.ssh/tm-andrew azureuser@20.72.141.129"
alias ssh_chart_server5="ssh -i ~/.ssh/tm-andrew azureuser@4.157.249.8"
alias ssh_chart_server6="ssh -i ~/.ssh/tm-andrew azureuser@20.51.230.55"
alias ssh_chart_server7="ssh -i ~/.ssh/tm-andrew azureuser@135.237.80.56"
alias ssh_chart_server8="ssh -i ~/.ssh/tm-andrew azureuser@52.146.8.67"
alias ssh_chart_server9="ssh -i ~/.ssh/tm-andrew azureuser@135.237.81.127"
alias ssh_chart_server10="ssh -i ~/.ssh/tm-andrew azureuser@20.84.100.7"
alias ssh_chart_server11="ssh -i ~/.ssh/tm-andrew azureuser@57.152.32.58"
alias ssh_chart_server12="ssh -i ~/.ssh/tm-andrew azureuser@172.174.153.56"
alias ssh_chart_server13="ssh -i ~/.ssh/tm-andrew azureuser@172.212.111.66"

# PROD CHART EASY (Client)
alias ssh_chart_client0="ssh -i ~/.ssh/tm-andrew azureuser@52.152.136.86"
alias ssh_chart_client1="ssh -i ~/.ssh/tm-andrew azureuser@13.72.100.137"

# rabbitMQ
alias ssh_rabbitmq="ssh -i ~/.ssh/tm-andrew azureuser@20.85.219.225"

# WebHook
alias ssh_webhook="ssh -i ~/.ssh/tm-andrew tmdev@172.212.35.78"

# PROD NGINX
alias ssh_nginx="ssh -i ~/.ssh/tm-andrew azureuser@172.173.145.99"

# PROD TM Website
alias ssh_tm_website="ssh -i ~/.ssh/tm-andrew james@167.71.186.1"

# BB
alias ssh_bb="ssh -i ~/.ssh/bg-andrew root@128.199.145.173"

# Turns on work VPN in terminal using .ovpn file given by IT and openvpn brew package
alias vpn_on="sudo openvpn --config /System/Volumes/Data/Users/AndrewPinon/Library/Application\ Support/OpenVPN\ Connect/profiles/1732035072633.ovpn"

alias ta="tmux attach-session -t"
