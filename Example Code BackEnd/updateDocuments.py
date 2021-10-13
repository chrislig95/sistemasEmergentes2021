from pymongo import MongoClient
#include pprint for readabillity of the 
from pprint import pprint

#change the MongoClient connection string to your MongoDB database instance
client = MongoClient("mongodb+srv://admin:O3ByoOtAKMH01ZrM@sistemergentes.slhwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",ssl=True,ssl_cert_reqs='CERT_NONE')
db=client.business

ASingleReview = db.reviews.find_one({})
print('A sample document:')
pprint(ASingleReview)

result = db.reviews.update_one({'_id' : ASingleReview.get('_id') }, {'$inc': {'likes': 1}})
print('Number of documents modified : ' + str(result.modified_count))

UpdatedDocument = db.reviews.find_one({'_id':ASingleReview.get('_id')})
print('The updated document:')
pprint(UpdatedDocument)

#Delete document
result = db.reviews.delete_one({'cuisine': 'Bar Food'})