#cat schoolAddresses | awk -F":" '{ print $2 }' > list
while read p; do
    PAIR=$p
    SCHOOL=`echo $PAIR | awk -F":" '{print $1 }'`
    ADDRESS=`echo $PAIR | awk -F":" '{print $2 }'`
    echo $ADDRESS > temp
    sed 's/\ /+/g' < temp > temp2
    ADDRESS=`cat temp2`
    curl "https://maps.googleapis.com/maps/api/geocode/json?address="+$ADDRESS+"&sensor=true" | grep -e 'lat\|lng' | head -2 2> /dev/null > temp

    sed 's/\ *"/"/' < temp > temp2
    sed 's/\$//' < temp2 > temp
    echo $SCHOOL : { $(cat temp) } >> locationList

done < schoolAddresses
