Invicara Coding Excercise:


User Interface

1. 
-->The landing will be having a navbar in which login and register options will be available.
-->Clicking on login or register options will open a popup where user can enter the details.
-->Once user is logged into the system, It will be showing list of workstations.
-->Workstation details:- 
	Each workstation will be having following details

	1.Indicator which can be green(Available) or red(Not Available) 
	2.book workstation button.
	3.Next Available time slot.



REST API 


4. 
Method: GET
/api/workstation/id

--> We will be passing the workstation id through which we will be able to search that particular 
workstation details in the system. Then we can query for the next available slots for that particular system.



5.
Method: PUT
/api/workstation/id

body
      {
	useremail: string,
	booked_at: Date,
	booked_till: Date
	current_reserved_status: boolean
      }


--> We will be passing the workstation id through which we will be able to search that particular 
workstation details in the system. Once we got the workstation we can update the fields of that system with the body values of the request.




Data Persistence

6.
User
email: string
password: string

Workstation
id: string,
desk_number: string,
current_reserved_status: boolean,
booked_slots: [time: Date],
next_available_slot: Date,
users: [
  {
	useremail: string,
	booked_at: Date,
	booked_till: Date	
  }
],




7.
Do we need to add authentication and authorization module for protecting certain routes?
Do we need to create Roles for the user to access certain routes?

 


