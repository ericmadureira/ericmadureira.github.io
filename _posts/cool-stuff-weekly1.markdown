---
layout: post
title: Cool Stuff I Learned this Week 1
date: 2019-04-18 07:20:39 -0300
categories:
---
As a way to help me measure my progress as a software developer, I decided to write weekly posts summarizing the coolest new things I’ve learned in a given week. Every subject will have just a brief comment summing up what it is and how it helped me. Naturally I hope these posts can help you be a more resourceful developer as well. Let’s start with the coolest stuff from **2019/04/07** to **2019/04/13**:

* Ruby
	* **group_by(&:itself)**: A method that groups recurring elements and returns a hash with them. I used this on a HackerRank challenge to count how many times certain strings appeared in a array.

* Rails
	* **I18n.l**: a method to help you localize your content to the desired language. I know this is basic rails stuff but I've never used this before, only the similar I18n.t to translate labels and attributes. With that I was able to adapt dates to the format "dd/mm/yyyy" which is the one used here in Brazil.
	* **kaminari**: it's a well known ruby gem that provides an easy solution for pagination. We are making a new version of our billing system at my job and kaminari makes pagination much easier just adding a few lines of code at the controllers and their views.
	* **scope**: a method to extract commonly used queries from the code, also available to the class. That one blew my mind because of the code drying potential. I had a habit of calling queries in the control. consultas padrão que ficam no model, ex: lista de clientes por grupo
	* **action_text**: 

* Programming
	* **HackerRank Challenges**: