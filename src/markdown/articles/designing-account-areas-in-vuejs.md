In February 2020, we redesigned the account dashboard for users of the Barbican [ticketing site](https://tickets.barbican.org.uk/).

---

> I’m a web designer and developer whose learning to write more interesting stories and less complex code. I work for the [Barbican](http://barbican.org.uk/), an arts centre in London.

<br>

### **The Project**

In February 2020, we redesigned the account dashboard for users of the Barbican [ticketing site](https://tickets.barbican.org.uk/).

**Why?** The existing design was functional, but not great for browsing on mobile and didn’t reflect the brand very strongly.

**How?** Combine Vue.js with the Spektrix ticketing API and do a re-design in Figma.



<br>

### Our Response

We knew this online space would evolve. We expected the number of services provided (and the way we provide them) to change fairly often, so it was important the design could handle iteration gracefully.

Our **Digital Products** team is small at the [Barbican](https://barbican.org.uk/) so we have to be agile when we build. The hardest part of this project would be in transitioning our ticketing experience from an iframe-based interaction to a feature-rich API-driven one.

Doing this meant we could improve fundamentals such as:

- How functionality appears (and responds on smaller screens)
- The accessibility of page content
- How meaningful interactions are  
   (ie. receiving confirmation that information has been saved on update)

<img src="https://miro.medium.com/v2/resize:fit:1400/1*iSO0-WYH22NWgefKnSnWWw.jpeg">

_A view of the Barbican Centre from the lakeside. It is Europe’s largest art centre and home to a concert hall, 2 art galleries, 2 theatres, 3 cinemas, a rooftop conservatory and a residential estate._

<br>

### **How we planned it**

Removing assumptions is an important part of the design process, so we used various exercises to include a wide range of contributions.

We began with a card sorting exercise, asking several people to sort functionality into groups based on their assumptions. This helped create more intuitive account navigation.

Next, we ran crazy eights. For this exercise, each group member was asked to sketch eight ideas in eight minutes. This is usually done by folding a sheet of paper into eight pieces and scribbling an idea into each one.

This process is designed to quickly generate simple ideas, which can then be iterated upon during the prototype stage.

<img src="https://miro.medium.com/v2/resize:fit:1400/1*AnfnUpDO-iSNrsv-BHyY6Q.png">

_Ideas for Crazy Eights are typically sketched on a single sheet of A4 paper._

<br>

### **How we designed it**

Prototypes are designed & shared online using [Figma](https://www.figma.com/).

At this point, we can create working layouts, which are informed by our group research, and can also be shared with our user panel for further testing.

These prototypes don’t always look immediately similar to the final product. Sometimes more complex designs are refined during multiple rounds of testing.

In this case, the final design was inspired by the [Tate Shop](https://shop.tate.org.uk/).

I love how you can navigate this layout without extra menus. The browsing experience is very similar on all screen sizes. You don’t need to re-learn how to browse on smaller screens (or vice versa) as there is very little content shift. I found this to be very elegant.

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1687271828380/a845476b-287d-4e41-91c8-6cc17e5c8aaa.png">

_The account area for the Tate Shop inspired much of our design work. The modular layout became a flexible foundation for our build._

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1687271798440/39ccb8f3-27be-4003-9f89-f5e9fde3b352.png">

<br>

### **How we built it**

Everything built on our [ticketing](https://tickets.barbican.org.uk/) site is based on the popular front-end toolkit [Bootstrap](https://getbootstrap.com/). This enables us to build consistently and predictably, speeding up development and improving user experience.

We also use the [Material Icons](https://fonts.google.com/icons) resource. It’s a large, beautiful library of icons, that adds to this consistency.

> This article is still being written. If you want to stay updated or have some suggestions, then please email [hello@paul.ly](mailto:hello@paul.ly)