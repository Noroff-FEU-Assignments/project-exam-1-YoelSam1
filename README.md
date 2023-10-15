# Project Exam 1

![image](/assets/img/ProjectExam1.png)

## Description

The "Community Science Museum Website" project is designed to serve as an online hub for science enthusiasts, learners, and the local community. It is built using HTML and CSS to fulfill the purpose of making science accessible, engaging, and educational.

In summary, the "Community Science Museum Website" is a multifaceted project that combines HTML and CSS to create an interactive and educational platform for young children between 7-15. Its core objectives are to inform the community about the museum's mission, provide engaging virtual tours, serve as an educational resource, promote upcoming events, showcase exhibits, and ensure a user-friendly, responsive design. This project is a testament to the power of web technologies in making science accessible and captivating for the local community.

1. Information Hub:

- The website aims to provide a central repository of information about the community science museum. Using HTML, it structures content to ensure that visitors can easily access details about the museum's history, mission, open time and vision.

- CSS styling is applied to make this information visually engaging and to create a consistent, professional appearance.

2. Virtual Tours:

- A central feature of the project is the integration of interactive virtual tours. These tours use HTMl to create a navigable images environment that simulates the experience of visiting the museum. The use of CSS ensures the virtual tour is visually appealing, effectively replicating the real-world exhibits.

3. Educational Resource:

- The website serves as a valuable educational resource, offering a broad spectrum of images with resources that cover diverse scientific topics. HTML structures this content for easy access, while CSS styles enhance readability and visual appeal.

4. Responsive Design:

- One of the project's key objectives is to ensure that the website is accessible on various devices, including desktops, tablets, and smartphones.

- CSS is used to implement responsive design principles, making the website adapt seamlessly to different screen sizes and orientations.

5. Event Promotion:

- To engage the community and encourage participation, the project promotes upcoming museum events, workshops, and lectures. HTML is used to structure event listings, and CSS styling makes these listings attractive and accessible.

- Registration forms are created using HTML and styled with CSS to provide a seamless user experience, allowing visitors to easily sign up for events.

6. Exhibit Showcase:

- The project features detailed exhibit pages with HTML and CSS to present the museum's collections and scientific concepts. This enhances the visitor's understanding and appreciation of the exhibits.

## Built With

- HTML
- CSS

### Installing

```bash
git https://github.com/YoelSam1/yoel-semester-project-1.git
```

2. Website Live Demo:

```
https://zesty-chebakia-194e8e.netlify.app/
```

## Contact

My Email Address: (Yoelsamsom21@gmail.com)

(--------------------------------------------------------------------------------------------)

## Goal

To put into practice the skills learned over your first year of studies.

## Brief

You have been tasked with creating a blog site. You can choose the design and topics covered on the blog, but it should have at least the following pages:

- Home page
- About page
- List of blog posts
- Blog post specific pages
- Contact page.

### Home Page

The home page should have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. For example, by default the user can see four posts, then they can click an arrow on the right to view the next four posts, and click it again to view the next four posts. The user can also click back to view results they had previously seen. This must be implemented for desktop at least, but if you want a simpler layout for mobile, you can change it from being in a carousel.

### Blog Page

The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog post page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

Create a contact us page, there should be 4 textboxes on this page.

- Name (Should be more than 5 characters long)
- Email address (Must be a valid email address)
- Subject (Should be more than 15 characters long)
- Message content (Should be more than 25 characters long)

Please use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for your website will be stored on a WordPress installation used as a Headless CMS. It’s important to note that we are only using WordPress to provide an API and add content for the blog. You should not submit a link to a WordPress site, but build your website using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data.

The project has two aspects:

- API from your WordPress installation
- Your website built with HTML, CSS and JavaScript

You will need to add at least 12 blogs for your website. You can use lorem ipsum for paragraphs if you need, but headings, images etc. should all make sense.

Note that this is an exam, and therefore tutor support will be limited as per the study plan.

## Level 1 Process

1. Decide on the theme for the blog you’re going to make
2. Create a prototype of the website
3. Install WordPress on your web host and add the blogs on the admin panel.
4. Use the GitHub repo created by GitHub Classroom for your files and deploy to Netlify
5. Build your website using HTML, CSS and JavaScript making a call to the WordPress REST API to fetch your data.
6. Install Hotjar on your website.
7. Ask users to test your website, and adjust based on their feedback and any insights from Hotjar.
8. Write a report documenting your project (template provided in this repository).
9. Submit your report as a PDF and a link to both your Netlify deployment and your GitHub repo.

## Level 2 Process (optional)

1. You can try adding a sort, filter, or search to the blog posts page allowing users to find the blog post more easily that they’re looking for.
2. Post the data from the contact form to WordPress so you have the details saved.
3. Allow users to submit comments on a blog post, and post this data to WordPress

## Summary report on the project

In this project, I decided to use the Software Development Life Cycle (SDLC) starting with planning with the Trello card and making sure what I would be working on step by step, so the way I built the card was planning, designing, testing, and deploying. This will clear the production to a high quality and estimated time, which will be shown in the Trello plan. That I will first add all the requirements and follow how long I need to work with it or how I expected to be done.

I did only the level 1 process because it took me a long time with research to figure out how to implement the slider on the home page I had a slider on the desktop plus the phone, also on the blog page where It says to add modal and loader for more blog post. so overall I worked a lot on them and did not have more time left for the level 2 option.

I chose this design because I like to travel, and I know I few tricks and it added to the idea I had. The design was very simple but I wanted to focus on what I had been asked to do and not what I wanted but I tried my best to style it so I looked welcoming. The website follows WCAG and SEO guidelines error-free.

Overall, the blog post has 12 blogs, that is because I want to save time and focus on other stuff fast. I didn’t know what to write on the About page, so I just got information on what the site stands for. I did use <P> text on the home page and <img> that I did not fetch but just added through vsc for style, but all the content is fetched from WordPress with JavaScript. I added animation for the slider on the Figma that looks like the slider on the website, even the nav bar looks alike.

What I learned through this project is that JavaScript is cool but very hard for a beginner like me so I learned that I will start on the hard part first and then go on the easy part after, what I did not do in this project was I thought I could do the Research and figure it out but it took me so long with research and understanding the code that I am trying work. I have never created a blog, so I learned that blog websites are not the same as an e-commerce website.

I did a recording Hotjar test on my blog site, and I got feedback saying the website looked very complete and that they found it easy to use. From the insight of the record, I couldn’t see a problem or issue when the user was testing it and clicking different pages and opening the link, so I didn’t make any changes and the website match like 90% from the Figma design style. Also, I have the recording link under, and all the others links there also.
