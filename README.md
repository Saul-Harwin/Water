# Water?

Water? is going to be an Web app. It will be a very simple app. It will tell you when to water your plant and how much water determines by the type of plant and what time of year it is. This app design is going to be very minimal but with a some new trendy Neuomorphism vibe going on.

I'm getting my inspiration of Neuomorphism from these images. I really like the soft 3d feel to the shapes created by the shadows.

![alt text](https://miro.medium.com/max/3200/1*gza8htfpZ-5eDabA7_kTJw.png)

![alt text](https://bashooka.com/wp-content/uploads/2020/01/neumorphism-ui-design-20.jpg)

![alt text](https://pbs.twimg.com/media/ERJg64aXUAEUAUm?format=jpg&name=medium)

For this app I that I was going to do my designing in Figma. This is my ![Figma Preview](https://www.figma.com/proto/LDxlt5QGwGLd1phyP1cS7O/Water?node-id=64%3A2&scaling=scale-down). 

## What am I going to develop my app with?

My app is going to be web-based meaning that I will use HTML, CSS and Js. This is because I am comforatable with these languages and I can create this app like I am creating a Website with all the usual responsiveness. I am hopeing to also get this app on the app store at some point but a decision on the time or even if it will possible is yet to be made. 

## What will my app do?

My app is going to store lots of details of common house plants. It is going to do this because I want the user of the app to be able to pick the plant that are clossest to their own plant. This will give them accurate details such as: what kind of conditions the plant like wether it likes well drained soil or if it likes thick soil, wether it likes to be sprayed with water or to be soak with water, when they should water the plant and finaly how much water they should water it. I will add to this list as I think of more information about a plant you need. 

It will have all this information already stored on the app so when the user first uses the app they will be prompted to select how many plants they have and what plant they are. I will need a search feature for this. The user also need to be prompted to turn on notifications and or add an email.

Then once the set up is complete the user will be taken to the home screen seen on the [Figma Preview](https://www.figma.com/proto/LDxlt5QGwGLd1phyP1cS7O/Water%3F?node-id=92%3A80&scaling=scale-down). This will show them which plant will need watering soon. From this screen you should have the option to go to an individual plant screen which will show you the indepth information about the plant.  

Once a plant does need to be watered the app will send a notification to the user to water the Plant. It will include what plant need to be watered at what time and how much water need. This alert will also be sent as a email. However I would also like to haver this being sent as a push notification. But I don't know how I am going to send that with my server. 

#### What am I going to use to send push notifications?

Choice 1 Amazon SNS:
Benfits of using Amazon SNS it is fairly cheap; It's free for the first 1 million notifications then $0.50/million notifications. It has a very indept documentations. It also supports many platforms meaning if I want to move my app to android as well I can do.

Choice 2 Accengage: 
Benifits of using Accengage is that it is completely free and also has multiple platforms. However it may lack in documentation because it is less huge and less Amazon SNS :information_desk_person:. 

#### What server am I going to be using. 
I am going to be using an apache http server. This will be running on my Rpi. This will handle all of the request to trefle. It will also have to store the information like acount detail which will be needed sending the users emails. I also have to figure out the best way for my server to track when the to send the emails to each user. So it will have to have some sort of time function that keeps track of how long left till a user plant needs to be watered. 

## Search feature 
#### How will it work?
 - User request string "Spider Plant" 
 - Server receives request get JWT_Token
 - Server sends request to trefle with the JWT_Token and "Spider Plant"
 - Server receives the response and the response is send to the user
 - Then the responses are display under the search bar
 
#### Design 

