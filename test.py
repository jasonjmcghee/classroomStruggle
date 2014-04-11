import json

classRaw = open('classData.json')
locationRaw = open('schoolLocations.json')

classData = json.load(classRaw)
locationData = json.load(locationRaw)

newJSON = {}
newData = {}

topMost = (None, float(0))
bottomMost = (None, float(0))
leftMost = (None, float(0))
rightMost = (None, float(0))
averageClassSize13 = float(0)
averageClassSize14 = float(0)
counter = 0

origin = (float(-122.304164), float(37.860270))

def getMax (tupOld, tupNew):
  if (tupOld[0] == None or float(tupNew[1]) > tupOld[1]):
    return (tupNew[0], float(tupNew[1]))
  else:
    return tupOld

def getMin (tupOld, tupNew):
  if (tupOld[0] == None or float(tupNew[1]) < tupOld[1]):
    return (tupNew[0], float(tupNew[1]))
  else:
    return tupOld

def formatted (di):
 return str(str(di[0]) + " (" + str(newJSON[di[0]]['lng']) + ", " + str(newJSON[di[0]]['lat']) + ")")

for loc in locationData:
  schoolPart = str(loc.keys()[0].split(' ')[0]).lower()
  for elem in classData:
    if elem['School'].split(' ')[0].lower() == schoolPart:
      school = loc.keys()[0]
      newData['lat'] = loc[school]['lat']
      newData['lng'] = loc[school]['lng']
      newData['class size 2012-2013'] = elem['2012-13 Average K-3']
      newData['class size 2013-2014'] = elem['2013-14 Average K-3']
      newData['coordX'] = (float(newData['lng']) - origin[0]) * (float(559) / float(0.1914))
      newData['coordY'] = (origin[1] - float(newData['lat'])) * (float(528) / float(0.143257))
      print str(school+ ": (" + str(newData['coordX']) + ", " + str(newData['coordY']) + ")")
      newJSON[str(school)] = newData.copy()

      topMost = getMax(topMost, (school, newData['lat']))
      bottomMost = getMin(bottomMost, (school, newData['lat']))
      leftMost = getMin(leftMost, (school, newData['lng']))
      rightMost = getMax(rightMost, (school, newData['lng']))
      
      averageClassSize13 += float(newData['class size 2012-2013'])
      averageClassSize14 += float(newData['class size 2013-2014'])
      counter += 1
      break

averageClassSize13 /= counter
averageClassSize14 /= counter

print "Average Class Size 2013: ", averageClassSize13
print "Average Class Size 2014: ", averageClassSize14
print "Top most: ", formatted(topMost)
print "Bottom most: ", formatted(bottomMost)
print "Left most: ", formatted(leftMost)
print "Right most: ", formatted(rightMost)

temp = open('classroomData.json', 'w')
json.dump(newJSON, temp)
