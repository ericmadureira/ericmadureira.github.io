---
layout: post
title: Cool Stuff I Learned [1]
date: 2019-04-18 06:00:39 -0300
categories:
---
As a way to help me measure my progress as a software developer, I decided to write weekly posts summarizing the coolest new things I’ve learned in a given week. Every subject will have just a brief comment summing up what it is and how it helped me. Naturally I hope these posts can help you be a more resourceful developer as well. Let’s start with the coolest stuff from **2019/04/07** to **2019/04/13**:

* Ruby
	* **group_by(&:itself)**: A method that groups recurring elements and returns a hash with them. I used this on a HackerRank challenge to count how many times certain strings appeared in a array.

* Rails
	* **I18n.l**: a method to help you localize your content to the desired language. I know this is basic rails stuff but I've never used this before, only the similar I18n.t to translate labels and attributes. With that I was able to adapt dates to the brazilian format "dd/mm/yyyy".
	* **kaminari**: it's a well known ruby gem that provides an easy solution for pagination. We are making a new version of our billing system at my job and kaminari makes pagination many times easier just adding a few lines of code at the controllers and their views. Later I'll try to do pagination on my own so I can learn it's secrets.
	* **scope**: a method to extract commonly used queries from the code and make them available to the class where the scope is defined. This one blew my mind because of the code drying potential. I had a bad habit of calling queries in the controller, now my MVC is a bit better!

* Programming
	* **HackerRank Challenges**: a website full of coding challenges to help you sharp your skills and get prepared for code interviews. I already knew this website but didn't use it often. Now I'm trying to take as many challenges as I can as part of my skill and career improvement plan for this year. There are many subjects to choose and you can also solve the problems using many different programming languages.