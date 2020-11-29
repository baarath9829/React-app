This log is to keep brief explaination about commit and state of application
To bridge gap of long term catch ups.

commit 1
more profile can be handled 
both update and delete fuction  is not perfect need to be crted [cascade changes need to done]

commit 2
updation and deleted is retified
back end configured ... was working fine ..
for some reason every request from application not received by server [eg: request.post is empty]
but api is working fine .. checked with postman ... request from postman is working fine ..

commit 3 
error solved hope request.POST is empty if denoter is applied, So request.data must be used..

only after 3 submit data is reflected in db
but only ones code get excuted [ first time 202 for others 208]
same apply to update and delete ..
checked with different order and time interval ...hoping time taken to update db is wat the factor .. need to comfirm  