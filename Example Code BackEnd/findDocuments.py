from pymongo import MongoClient

#Step 1: Connect to MongoDB - Note: Change connection string as needed
client = MongoClient("mongodb+srv://admin:O3ByoOtAKMH01ZrM@sistemergentes.slhwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",ssl=True,ssl_cert_reqs='CERT_NONE')
db=client.business


fivestar = db.reviews.find_one({'rating': 5})
print(fivestar)

# cuenta la cantidad de documentos con ese criterio
fivestarcount = db.reviews.count_documents({'rating': 5})
print(fivestarcount)

# Now let's use the aggregation framework to sum the occurrence of each rating across the entire data set
print('\nThe sum of each rating occurance across all data grouped by rating ')
stargroup=db.reviews.aggregate(
# The Aggregation Pipeline is defined as an array of different operations
[
# The first stage in this pipe is to group data
{ '$group':
    { '_id': "$rating",
     "count" : 
                 { '$sum' :1 }
    }
},
# The second stage in this pipe is to sort the data
{"$sort":  { "_id":1}
}
# Close the array with the ] tag             
] )
# Print the result
for group in stargroup:
    print(group)
