export PATH=/Applications/Shoes.app/Contents/MacOS:/opt/local/bin:/opt/local/sbin:~/bin:~/dev/tools/android-sdk-mac_86/tools:$PATH
export MANPATH=/opt/local/share/man:$MANPATH

alias ls="ls -Gl"
alias rmate="mate app config db lib public features"
alias mysql="mysql5"

alias mytunnel="ssh -N yangyi@elakex.com -L 7777/localhost/3128"

# project shortcut
alias golqt="cd ~/dev/rails/luqutong"
alias goecaifu="cd ~/dev/rails/ecaifu"

# git shortcut
alias ga="git add"
alias gb="git branch"
alias gba="git branch -a"
alias gc="git commit"
alias gcm="git commit -v -m"
alias gco="git checkout"
alias gst="git status"
alias gf="git fetch"

source ~/.git-completion.sh

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
PS1="\w\$(parse_git_branch) $ "