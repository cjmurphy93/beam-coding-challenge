# Engineering Internship Kata

# Developer's Explanation

This is my submission for the Engineering Internship Kata! It was a lot of fun and I was even able to learn some new things to put on my toolbelt. I tried to be as efficient with my time as possible and made decisions based on that. There is more that I would want to do if I didn't follow the reccomended time as closely as possible.

To start, run:

```shell
npm start
```

## Decision Log

- Overall:

  - I decided to use React as my framework. I know that Beam uses it and I know it pretty well. The components and abstraction make it cleaner than most other options and if I decided to develop this project further the virtual Dom would be excellent for adding more features.
  - create-react-app was used to quickly set up the framework.
  - I used as much semantic HTML as possible to make it clearer and deliberate.
  - I adhered to the mockup as closely as possible. In the interest of time, I built the app from the desktop site emulating the kata first and worked on responsiveness as I went, usually after building a component or towards the end of the project. Normally I would want to start with the mobile design and build up from there.
  - I also started out utilizing px in css to quickly match the mockup and adjusted to em later in most cases. This helps with browser compatability and can potentially have a great effect on the responsive design. This was my first experience with figma and if I use it again I will most likely convert to em from the start.
  - The Roboto font was taken from the Google Fonts api and embeded in the head to match the correct font.
  - In all cases except the toothbrush and glasses, svg's were used because of their lightweight and excellent scalability.

- Breakpoints:

  - As far as for breakpoints, I addressed certain parts individually. This was mainly because I was working "backwards" from the desktop to mobile. I would most likely have less breakpoints if done in the opposite way.
  - I used Chrome developer tools a lot to emulate the layout of a phone to see how they looked.
  - As far as general breakpoints go, I looked up popular phone screens and worked out how breakpoints for individual parts would work with them.

- Nav-bar:

  - I built the nav-bar first and initially reused a nav-bar from another project I made. Several key adjustments had to be made but it was pretty quick to do, saving time overall.
  - The two buttons on the right were very interesting for me. I have never made a gradient curved border before. After researching it a bit, I decided to emulate a border by putting a gradient background on a link whith a white span on top that was 1px smaller all around. I believe that it looks much nicer than a solid border.
    -For the sake of time and potential compatability with the website, once I finished laying down the parts of the nav bar I referenced the one on Beam's website. I incorporated the breakpoints that were used and emulated a dropdown button like the site.
    -Also in the interest of time, I followed the instructions and made the parent links act as such, but I did not implement dropdowns. I chatted with my recruiter about this and they clarified that was acceptable. If I used more time, I would utilize React Hooks to open and close them. I would build a seperate drop down component for the compressed nav-bar that vertically emulated the full one. I would most likely make it a modal since the screen is smaller past the breakpoint. The dropdowns for the fully extended nav-bar would most likely be written inside the navbar component.

- Mission Section:

  - The first decision that I had to make concerned the wavy background at the top of the section. After considering some crafty CSS tricks to make the wavy border, it became clear that the simplest option was to use the SVG of it from the mockup. This was much simpler, but a little tricky to get just right. Ideally I wanted it to stretch horizontally while staying the same height to avoid either getting too big to go past the video, or too small to expose the white text on the white background. Given the size of the svg, it only became a problem past 1440px, so I just used a breakpoint to have it be 100% until 1440px across and at that point it would scale to match the with of the screen, increasing the height as well. This would only become a problem on a massive screen.
  - I presumed that the section in the mockup was the limit to how big the content would get, so I treated it as the limit for this section. It could pose a problem on a giant screen.
  - The white text on the mockup is pretty clearly aligned to the left, however I had issues with changing the size of the video below it to match the 710px it is in the mockup, so it looked unevenly to the left. I decided to align it to the center and while it is a subtle difference it makes it look so much better.
  - React hooks were utilized to fetch the video from the Vimeo Api when the component loaded. Hooks are cleaner to code with and are highly encouraged in react now.
  - This was my first time using Vimeo and oEmbed. Since the html was in a string in the JSON, I had to enescape it in react. dangerouslySetInnerHTML was used, which I was a bit uneasy about due to the potential for a cross-site scripting attack. However the fetchURL is hardcoded so I don't think there is a potential problem. After some research I found some alternative libraries, but I decided to kep what I had due to time and not wanting to add extra libraries.
  - I found it impossible to make the video responsive in size. I tried everything I could think of, initially using the weird trick of wrapping it up in a container with the padding set to the aspect ratio, but I luck. I usually use that when I use video tags and it works like a charm. I realized that if the video comes from anything above a free acount on Vimeo, you cannot adjust it. Beam's account is a business one and they would have to make it responsive from their vimeo acount. To counteract the video's static size, I introduced a breakpoint around it's width where I swapped in an svg of the video to help get an idea of what the video would look like on mobile.
  - The toothbrush and glasses pictures were interesting. I really wanted to keep them throughout considering that The Beam Brush is very important to Beam. I set the absolute positions to match the mockup with the glasses staying partially out of frame. I set a breakpoint where both the brush and the glasses are about to interfere with the text and had them move into the center. Initially I wanted the brush to be horizontal, but by chance I saw it vertically and it seemed like a much better look. The Beam Brush looks triumphant standing upright and center, and it is great for marketing purposes that way. The glasses go below, just aboce the Leadership section. I feel that these placements help break up the section and kind of relate to what the sections below them are about: the brush being the symbol of the mission and the glasses being symbolic of the knowledgable leaders.
  - One thing I would possibly change with more time would be to make the text in that section more responsive in size. As of right now the whole section just changes, but if the fontsize also changed it could possibly look better.

- Leadership:

  - React Hooks were once again used to fetch the information from the provided API.
  - I set up the boxes just like the mockup and implemented the hover box-shadow. I also implemented a change in the z-index for the box shadow considering that in the mockup the boxes seem to be basically touching. The change in z-index clears the shadow from being covered up by a box below it.
  - My first thought was to implement a grid system in CSS, but then I realized that the bottom row was centered, which isn't possible with a grid. I instead utilized a flexbox and it worked so well with the provided specs that I did not have to do anything else to get a great responsive change, flex-wrap took care of it.
  - With more time I would probably change the boxes for mobile to make them look a bit more appropriate, but as they are it still works well.

- Investors:

  - This section was pretty simple. I just downloaded the SVGs of the investors and put them in another flexbox.
  - I was considering making it so they weren't even in a flex-wrap. Instead I though to make it change from a row to a column as soon as they became so close together that one goes to the second row. I did this because it made Georgian Partners look below the rest of the-metaphorically. For all I know they could be the biggest (or loudest) investors! This is really only a problem for them though, because it goes to 2 rows of 2 and it makes it look more even.

- Footer:
  - For the footer I just built it out in a straightforward manner and then utilized the breakpoints from the website to create a consistent feel while saving a little bit of time.
  - I did change some things with the padding on the smaller screen breakpoints. I didn't like how squished together they looked, and I also think it looks a little off if the sublists are aligned to the left instead of center.
  - There is an 'a' where an 'an' should be, but I left it out of solidarity of the mockup. Don't worry, it's correct on the website!

# Original Kata

Beam is an exciting company, founded on the idea that everyone deserves access to dental care. As such, we want to share this vision in a presentable and exciting way!
This kata involves bringing a marketing site from a mock up to reality.

## Instructions

Please read through the user stories below and implement the functionality to complete them according to their requirements. The code design is entirely up to you as long as the solution can be run with npm or yarn start/opening an HTML file.

As there are often trade offs when crafting a solution, the following is the priority of what we are considering when reviewing your kata:

- Functionality - Does it fulfill the requirements and work correctly?
- Style - Does the solution adhere to the mock up?
- Responsiveness - Does the solution respond appropriately across browsers and across screen sizes?

Please add a section explaining the technical and style decisions involved in designing your solution. What options were you considering at various levels (eg. breakpoint choices, layout choices, and design, as applicable) and what were the tradeoffs in choosing one option over another? Feel free to include this section here in this README.

Resources to get you started:

- [Figma Mockup](https://www.figma.com/proto/ZN9GQfR0wSgf6jGALBb0uM/Web-Dev-Kata?node-id=1%3A2&scaling=min-zoom)
  - Note: If you don't have a Figma account, one would need to be created in order to get the editor view
- [How to export assets from Figma](https://help.figma.com/hc/en-us/articles/360040514533-Export-to-PNG-JPG-SVG-or-PDF-with-Export-Settings)
- For a guide to working with oEmbed + Vimeo videos, [check out this link]('https://developer.vimeo.com/api/oembed/videos'). Alternatively, you can [visit this link](https://vimeo.com/api/oembed.json?url=https://vimeo.com/327864855) for metadata to help with embedding the marketing video referenced in this guide.

## Submitting your work to Beam

Please include a .nvmrc file with your submission so we know version of node you are using. There are differences between versions that can be significant to your application's runtime versus your reviewer's installed node version.

Once you're happy with your submission, you can send it back in one of two formats; either as a git bundle or a zip file.

To create the git bundle simply execute:

```shell
cd engineering-internship-kata
git bundle create engineering-internship-kata.bundle <YOUR BRANCH NAME HERE>
```

This will create a .bundle file which contains the entire git repository in binary form, so you can easily send it as an attachment. Alternatively, you could zip the project instead.

To ensure that our review of your kata remains as unbiased as possible, your submission will be anonymized before it is reviewed. To help us with this process, please double check that any personally identifiable information, such as your name or email address, is removed from your code, readme or any commit messages. Your author and committer information will be scrubbed by our anonymizing process.

## High Level Scope

At a high level, this kata should accomplish the following:

- Page Layout as close as possible to the one provided in the mock up
- Page should use semantic HTML
- Provide a responsive design depending on screen size (desktop and mobile)

## User Stories

**Page Layout**

_As a Marketing Executive_<br>
_In order to promote Beam's Mission_<br>
_I want to view Beam's Mission and Vision page_<br>

**Acceptance Criteria**

- Create a cross-browser supported (Chrome, Safari, Edge) layout as close to the mock up as possible
- Leadership links and images should leverage the JSON Noted below
- Other links can behave as links but do not need to go anywhere
- Ensure the hover effect is performed over each leadership team member
- Provide a responsive design depending on screen size (desktop and mobile)

 <br>

**_Responsive Design_**
_As a Marketing Executive_<br>
_In order to increase user friendless and broaden our impact_<br>
_I want the marketing page to be responsive_<br>

We have intentionally left out a responsive design layout from the mock up. This is an opportunity for us to see how you could implement a responsive design, given the desktop specs version.

**Acceptance Criteria**

- Page is responsive for both desktop and mobile

**_The Marketing API_**

Please read the user story on the next page and implement the functionality to complete them according to their requirements.
Resources

- Figma Mockup https://www.figma.com/proto/ZN9GQfR0wSgf6jGALBb0uM/Web-Dev-Kata?node-id=1%3A2&scaling=min-zoom

**_User Story_**

**_Load Leadership Team from an API_**

As a Marketing Executive I want to view the leadership team dynamically So that there’s not a code change required when changes in leadership occur

**_Scope_**

Replace the statically loaded leadership with leadership that comes from the following API: https://beamtech.github.io/marketing-kata-html/leadership-team.json
