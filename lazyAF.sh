echo "What have u done with the gaem?"

read commit

echo "K sure, commiting to GitHub"

#Commit the changes
git add .
git commit -m "$commit"
git push

spinner() {
    local i sp n
    sp='/-\|'
    n=${#sp}
    printf ' '
    while sleep 0.1; do
        printf "%s\b" "${sp:i++%n:1}"
    done
}

printf 'Doing important work '
spinner &

sleep 10  # sleeping for 10 seconds is important work

kill "$!" # kill the spinner
printf '\n'