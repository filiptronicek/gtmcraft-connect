echo "What is the new ip?"

read newIP

echo "Meet you on GTM Craft!"

#Change the file
sed -i '1d' ./ip.txt
echo $newIP  >> ip.txt   
#Commit the changes
git add ip.txt
git commit -o ip.txt -m "Change IP"
git push
