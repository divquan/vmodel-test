// export function findSubtopicAndContent(searchTerm) {
//   for (const topic of generalTopics) {
//     if (
//       topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       topic.link.toLowerCase().includes(searchTerm.toLowerCase())
//     ) {
//       const subtopics = subTopics[topic.link];
//       if (subtopics) {
//         const content = subTopicContent[topic.link];
//         // Search within the content for the search term
//         const searchResult = content
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase());
//         return {
//           subtopics,
//           content,
//           searchResult,
//         };
//       } else {
//         return { subtopics: [], content: "", searchResult: false };
//       }
//     }
//   }
//   return { subtopics: [], content: "", searchResult: false };
// }

export const generalTopics = [
  { name: "Portfolio", link: "portfolio", icon: "" },
  { name: "Business Hub", link: "business_hub", icon: "" },
  { name: "Creation Tools", link: "creation_tools", icon: "" },
  { name: "Feed", link: "feed", icon: "" },
  { name: "Member Options", link: "member_options", icon: "" },
  { name: "Discover", link: "discover", icon: "" },
  { name: "Settings", link: "settings", icon: "" },
  { name: "My Network", link: "my_network", icon: "" },
  { name: "Invite and Earn", link: "invite_and_learn", icon: "" },
  { name: "VModel Credits (VMC)", link: "vmodel_credits", icon: "" },
  { name: "Beta Dashboard", link: "beta_dashboard", icon: "" },
  { name: "", link: "not", icon: "" },
];

export const subTopics = {
  portfolio: [
    { name: "Your VModel Portfolio", link: "vmodel_portfolio" },
    { name: "Portfolio image", link: "portfolio_image" },
    { name: "Bio", link: "bio" },
    { name: "Menu icon", link: "menu_icon" },
    { name: "More information ", link: "more_information" },
    { name: "Star sign ", link: "star_sign" },
    { name: "Reviews and Feedback", link: "review_and_feedback" },
    { name: "Location", link: "location" },
    { name: "Grid and Galleries", link: "grid_and_galleries" },
    {
      name: "Splitting images (Splitter)",
      link: "splitting_images_splitter",
    },
    // { name: "Portfolio galleries/grids", link: "portfolio_galleries_grids" },
    // { name: "Messages", link: "messages" },
    // { name: "My network", link: "my_network" },
    // { name: "Polaroid", link: "polaroid" },
    // { name: "Bookings", link: "bookings" },
    // { name: "Offerings", link: "offerings" },
  ],
  business_hub: [
    { name: " Business Hub ", link: "business_hub" },
    { name: " Unavailability ", link: "unavailability" },
    { name: "Bookings", link: "bookings" },
    { name: "Jobs", link: "jobs" },
    { name: "Services", link: "services" },
    { name: "Applications", link: "applications" },
    { name: "Reviews", link: "reviews" },
    { name: "Earnings", link: "earnings" },
    { name: "Coupons", link: "coupons" },
    { name: "Invoice", link: "invoice" },
    { name: "Analytics", link: "analytics" },
  ],

  creation_tools: [
    { name: "Creating a Post", link: "creating_a_post" },
    { name: "Creating a service", link: "creating_a_service" },
    { name: "Creating a job", link: "creating_a_job" },
    { name: "Creating a coupon", link: "creating_a_coupon" },
    {
      name: "Printing Portfolios or polaroids",
      link: "printing_portfolios_or_polaroids",
    },
    {
      name: "Splitting images (Splitter)",
      link: "splitting_images_splitter",
    },
  ],
  feed: [
    { name: "Feed", link: "feed" },
    { name: "Slides", link: "slides" },
    // { name: "Post options", link: "post_options" },
  ],
  member_options: [
    { name: "Follow", link: "follow" },
    { name: "Connect", link: "connect" },
    { name: "Job notifications", link: "job_notifications" },
    { name: "Post notifications", link: "post_notifications" },
    { name: "Coupons notifications", link: "coupons_notifications" },
  ],
  discover: [
    { name: "Discover", link: "discover" },
    { name: "Member search and hashtags", link: "member_search_and_hashtags" },
    { name: "Spotlight", link: "spotlight" },
    {
      name: "Most popular, Talent near you, Rising talent.",
      link: "most_popular_talent_near_you_rising_talent",
    },
  ],
  settings: [
    { name: "Porflio settings", link: "portfolio_settings" },
    { name: "Account", link: "account" },
    { name: "Gallaries", link: "galleries" },
    { name: "Payments", link: "payments" },
    { name: "Feed", link: "feed" },
    { name: "Notifications", link: "notifications" },
    { name: "Verification", link: "verification" },
    { name: "Permissions", link: "permissions" },
    { name: "Appearance", link: "appearance" },
    { name: "Security and Privacy", link: "security_and_privacy" },
  ],
  qr_code: [
    { name: "Creating QR codes", link: "creating_qr_codes" },
    { name: "Adjusting QR code colors", link: "adjusting_qr_code_colors" },
  ],
  invite_and_learn: [
    {
      name: "Inviting contacts",
      link: "inviting_contacts",
    },
  ],
  vmodel_credits: [
    {
      name: "VMC and how they work",
      link: "vmc_and_how_they_work",
    },
    {
      name: "How to earn VMC",
      link: "how_to_earn_vmc",
    },
  ],
  beta_dashboard: [
    {
      name: "Announcements",
      link: "announcements",
    },
    {
      name: "Upcoming features",
      link: "upcoming_features",
    },
    {
      name: "Updates documentation",
      link: "updates_documentation",
    },
    {
      name: "App Documentation",
      link: "app_documentation",
    },
  ],
  my_network: [
    { name: "My Connections", link: "my_connections" },
    { name: "Sent Requests", link: "sent_requests" },
    { name: "Received requests", link: "received_requests" },
    { name: "Followings", link: "followings" },
    { name: "Followers", link: "followers" },
    { name: "My contacts", link: "my_contacts" },
    { name: "Blocked account", link: "blocked_account" },
  ],
};

export const subTopicContent = {
  portfolio: {
    vmodel_portfolio: `
        <article>
        <h1> Your VModel Portfolio </h1>
        <p>A Portfolio on VModel is your digital showcase, a personalised space where you, as a creative
        individual, present your skills, work, and offerings to the vibrant VModel community. It goes
        beyond a traditional resume or profile by providing a dynamic and visually engaging
        representation of your creative identity.</p>
        
        <div></div>
        <ul>
        <li>Grids</li>
        <li>Polaroids</li>
        <li>My network</li>
        <li>Messages</li>
        
        </ul>

        </article>
    
    `,
    portfolio_image: `<article>
                       <h1>Portfolio Image</h1>
                       <div></div>
                       <p>Let's talk about VModel's portfolio image - it's not just a picture, it's like your creative calling card. It's the
                       first thing folks see when they check you out on VModel. So, think of it as your chance to say, <i>"Hey, this
                       is me, and this is what I'm all about!"</i> Pick an image that feels true to your style and personality,
                       something that speaks volumes without saying a word. Your VModel portfolio image isn't just a snapshot;
                       it's your story in pixels. Choose wisely, and let your creativity shine through!</p>
                       <div></div>

                      <div>
                      <ul><li><a href="#"><span>How to edit/change your profile image</span></a></li></ul>
                      </div>
                      <div></div>
                      </article>`,
    bio: `<article><h1>Bio</h1>
              <div>
            <p> Introduce yourself to the VModel community with a captivating bio! Introduce yourself to the VModel community with a captivating bio! Share what makes you tick, your
            passions, and the story behind your creative journey. Remember, on VModel, longer bios are like your
            space to really express yourself. They let others get to know you better before they even think about
            booking or reaching out. So, spill the beans and let your creativity shine!
            </p>
            <div></div>
              <ul><li><a>How to edit/change your Bio</a></li></ul>
              </div>
              <div></div>
              </article>`,

    menu_icon: `<article>
    <h1>Menu icon</h1>
    <div>
    <p>
    Accessing your menu is straightforward: find the icon at the top right of your VModel Portfolio. A simple tap opens up various features for you to explore and enhance your VModel experience!
    </p>
    </div>
</article>`,
    more_information: `<article>
                        <h1>More Information icon</h1>
                        <div><p>Depending on your member type, the "More Information" icon reveals a variety of details about you. If you're
                        a model, it might include your body measurements; if you're a photographer, it could showcase your
                        preferred camera type. Additionally, there are tools like social media analytics, allowing you to inform
                        clients about your performance on other platforms. The section also covers your years of experience in
                        your specialisation, your personality and more.</p></div>
                        <ul>
                          <li><a href="#">How to edit more information</a></li>
                        </ul>
                      </article>`,
    star_sign: `<article>
                    <h1> Star sign</h1>
                    <div>
                      <p> Explore the Star Sign feature in your portfolio to showcase your zodiac sign and creative character to the
                      VModel community. It's not just a cosmic touch – it also helps in recommending individuals who vibe with
                      similar creative energies. Considering personalities do vary and matter, it can be a valuable factor when
                      making booking decisions.</p>
                    </div>
                    <div></div>
                    <ul><li><a href="#">How star signs work</a></li></ul>
                  </article>`,
    review_and_feedback: `<article>
                            <h1>Reviews and Feedback</h1>
                            <div>
                              <p>
                              On VModel, members can receive star ratings and reviews from other members or, in some cases, from
                              VModel itself. Keep reading to learn more about how reviews and ratings work.
                              </p>
                            </div>
                          </article>`,
    location: `<article>
                <h1>Location</h1>
                <div>
                  <p>The location displayed on your profile is the one you entered when creating your account or during your
                  last location edit. Keep in mind that this may or may not be your precise geolocation, depending on when
                  you grant VModel access to your location. This geolocation feature is handy for discovering useful
                  services nearby and receiving recommendations for talent based on your location.</p>
                </div>
              </article>`,
    grid_and_galleries: `<article>
    <h1>Grids and Galleries</h1>
    <div>
    <p>
    Galleries on VModel serve as captivating grid albums intricately woven into your portfolio, offering a
    dynamic presentation of your creative identity. Crafted seamlessly at upload, each gallery acts as a
    unique chapter, narrating a specific part of your story or showcasing diverse skills. With the ability to
    create multiple galleries, effortlessly navigate through a member's artistic journey by swiping horizontally on their portfolio. Tapping on any content within a gallery expands it into a feed, providing a more
    immersive and detailed view of the showcased creations. You can also view as slides if you wished to.
    It's a visual journey that allows you to curate and express the full spectrum of your creative prowess
    within the vibrant VModel community.
    </p>
    </div>
    </article>`,
    splitting_images_splitter: `<article>
    <h1>Splitting images (Splitter)</h1>
    <div>
      <p>
      Introducing the Splitter – a tool we've crafted to empower VModel members in tailoring their
      images seamlessly to fit the unique grid layout of the VModel portfolio. This innovative feature is
      a game-changer for those aiming to curate a visually striking profile without the hassle of
      external tools. Now, effortlessly split your frames and make your creative vision come to life
      within the captivating aesthetic of the VModel portfolio. Elevate your profile with the simplicity
      and precision of the Splitter tool.
      </p>
    </div>
  </article>`,
    // portfolio_galleries_grids: `<article><h1></h1></article>`,
    // messages: `<article><h1></h1></article>`,
    // my_network: `<article><h1></h1></article>`,
    // polaroid: `<article><h1></h1></article>`,
    // bookings: `<article><h1></h1></article>`,
    // offerings: `<article><h1></h1></article>`,
  },
  business_hub: {
    //!!will add links here
    business_hub: `<article>
                      <h1>Business Hub</h1>
                      <div>
                        <p>
                        Welcome to the VModel Business Hub – your go-to destination for all things professional on VModel.
                        Whether you're delving into analytics, checking your earnings, or managing your availability, the
                        Business Hub has you covered. It's your central command for keeping tabs on your professional journey,
                        tracking your progress, and more, all conveniently consolidated in one place. Your career, simplified and
                        streamlined with VModel's Business Hub. Here are the tools you can access with the VModel Hub:
                        </p>
                      </div>
                    </article>`,
    unavailability: `<article>
                        <h1>Unavailability</h1>
                        <div>
                          <p> 
                          The Unavailability Tool on VModel is your scheduling superhero. Need a specific date off from
                          bookings? No problem. This feature lets you effortlessly clear your schedule right within the app.
                          Perfect for those with tight creative windows or other commitments. Take control of your
                          availability and make sure your time on the platform aligns seamlessly with your creative flow or
                          other engagements. Your schedule, your way, with VModel's Unavailability Tool.
                          </p>
                        </div>
                      </article>`,
    bookings: `<article>
                        <h1>Bookings</h1>
                        <div>
                          <p> The Bookings Tool is your home base for managing all your engagements on VModel. Whether
                          they're current, past, or even canceled, this is where you get the full picture. Plus, you can
                          effortlessly check out all the offers you've sent within the Bookings module. It's your
                          comprehensive view of your booking history and the status of your creative connections, all
                          conveniently accessible from one central hub. Your bookings, your control, right from the heart of
                          VModel.
                         </p>
                        </div>
                        <div> Related: <a href="#">Tips on how to secure a booking</a></div>
                      </article>`,
    jobs: `<article>
              <h1>Jobs</h1>
              <div>
                <p>When you've crafted a job on the VModel platform, the Job Tool steps in as your trusty assistant.
                It neatly compiles a list of every job you've created, giving you a comprehensive overview of your
                current, past, and future projects. Manage your creative endeavors seamlessly, all in one place.
                The Job Tool on VModel – because every job deserves thoughtful organisation.
               </p>
               <div>
               Related:
               <a href="#">- How to create a job</a>
               </div>
               </div>
            </article>`,
    services: `<article>
                  <h1>Services</h1>
                  <div>
                    <p>If you've offered your services on VModel, the Services Tool is your go-to companion. It compiles
                    a detailed list of all the services you've provided on the platform. This allows you to efficiently
                    manage your service offerings, whether they're ongoing, completed, or scheduled for the future.
                    Your services, your way, all neatly organized with the Services Tool on VModel.
                   </p>
                   <div> Related:
                   - <a href="#"> How to create a service</a></div>
                  </div>
                </article>`,
    applications: `<article>
                  <h1>Applications</h1>
                  <div>
                    <p>The Applications List is your curated compilation of jobs you've applied to on VModel. It's your
                    handy reference for tracking your engagement and connection with potential opportunities. Keep tabs on your applications, making it easy to stay organized and informed about the positions you're pursuing within the VModel community. Your applied jobs, neatly listed for your
                    convenience.
                     </p>
                  </div>
                  <div>Related:
                  <a href="#">
                  - How to apply for a job
                  </a>
                  </div>
                </article>`,
    reviews: `<article>
                  <h1>Reviews</h1>
                  <div>
                    <p>Your reviews are gateway to insights and reflections on your VModel journey. This feature is your
                    compass for navigating through the sentiments shared by others in the community. Dive into
                    reviews and feedback, gaining valuable perspectives on your work and collaborations. It's not
                    just a tool; it's your window into the collective experiences that shape your creative path on
                    VModel. Explore, learn, and grow with the Reviews and Feedback Tool.</p>
                  </div>
                  <diV>
                    Related pages:
                    <ul>
                      <li><a href="#">How to leave a review</a></li>
                      <li><a href="#">Automatic reviews from VModel</a></li>
                      <li><a href="#">Automatic negative reviews</a></li>
                      <li><a href="#">How to edit or remove reviews?</a></li>
                      <li><a href="#">How to reply to a review?</a></li>
                      <li><a href="#">How to see another member’s reviews?</a></li>
                      <li><a href="#">How do we calculate the average star rating?</a></li>
                      <li><a href="#">Reporting inappropriate reviews</a></li>
                      <li><a href="#">How to respond to unfair reviews</a></li>
                    </ul>
                  </diV>
                </article>`,
    earnings: `<article>
                  <h1>Earnings</h1>
                  <div>
                    <p>Welcome to the Earnings Page – your financial compass on VModel. This dedicated space
                    provides a clear snapshot of your earnings within the platform. Track your creative endeavours,
                    see the fruits of your labor, and gain valuable insights into your financial journey. The Earnings
                    Page is not just a ledger; it's your financial ally, keeping you informed and empowered as you
                    navigate your professional path on VModel.</p>
                  </div>
                </article>`,
    coupons: `<article>
                  <h1>Coupons</h1>
                  <div>
                    <p>Introducing Coupons, an innovative addition to VModel designed with influencers and similar
                    creators in mind. Given their diverse collaborations with multiple brands, these individuals often
                    accrue numerous coupons. VModel breaks new ground by offering the first open-source platform
                    where these coupons can be easily copied, utilized, and, in the process, benefit the owner. It's a
                    unique approach to streamline and maximize the advantages of these valuable opportunities
                    within the VModel community.
                   </p>
                  </div>
                  <div>Related: 
                  <ul> <li><a href="#">How to create a coupon </a></li></ul>
                  </div>
                </article>`,
    invoice: `<article>
                  <h1>Invoice</h1>
                  <div>
                    <p>Introducing the Invoice Feature – a powerful addition to VModel designed to simplify your
                    financial transactions. With this tool, you can effortlessly generate professional invoices directly
                    within the platform. Whether you're a model, influencer, photographer, or any other creative
                    professional, the Invoice Feature ensures a seamless and efficient all-in-one solution for
                    creating, managing, and tracking invoices, empowering you to maintain a smooth and
                    professional financial workflow on VModel.</p>
                  </div>
                  <div>Related: 
                  <ul> <li><a href="#">How to create an invoice</a></li></ul>
                  </div>
                </article>`,
    analytics: `<article>
                  <h1>Analytics</h1>
                  <div>
                    <p>Dive into Analytics on VModel – your hub for tracking essential metrics. Monitor your profile
                    views, keep a close eye on your earnings, and explore your <strong>VMC</strong> (VModel Credits) activity, all in
                    one centralised space. This feature provides a comprehensive snapshot of your performance and
                    engagement within the VModel community. From gauging your popularity to assessing your
                    financial progress, Analytics is your go-to resource for valuable insights into your journey on
                    VModel. </p>
                  </div>
                </article>`,
  },
  creation_tools: {
    creating_a_post: `
                  <article>
                  <h1>Creating a Post</h1>
                  <ol >
                  <li>1.  Click on the VModel icon logo in the middle of the bottom navigation bar.</li>
                  <div></div>
                  <li>2.  Tap on "Create a Post."</li>
                  <div></div>
                  <li>3.  You'll be directed to your gallery; choose a single media item or multiple for your post.</li>
                  <div></div>
                  <li>4.  Add a caption, feature another VModel member, and include a hashtag and location.</li>
                  <div></div>
                  <li>5.  Hit the button, and your post is ready to make waves in the lively VModel community. Let your
                  creativity shine!
                  </li>
                  </ol>
                  </article>
                      `,
    creating_a_service: ` <article>
                  <h1>Creating a service</h1>
                  <p>Creating a service on VModel is a simple process:</p>
                  <ol >
                  <li>1.  Click on the VModel icon logo in the middle of the bottom navigation bar.</li>
                  <div></div>
                  <li>2.  Tap on "Create a Service."</li>
                  <div></div>
                  <li>3.  You'll be directed to a new form to fill in your service details, including title, descriptions,
                  banners, service categories, price, discounts, Content license (if applicable), FAQs, and more.</li>
                  <div></div>
                  <li>4. Once you've completed the details, tap on the "Create" button.</li>
                  <div></div>
                  <p>It's as easy as that to showcase your services and talents within the VModel community.</p>
                  </ol>
                  </article>`,
    creating_a_job: ` <article>
                  <h1>Creating a job</h1>
                  <p>Creating a job on VModel is a straightforward process:</p>
                  <ol >
                  <li>1.  Click on the VModel icon logo in the middle of the bottom navigation bar.</li>
                  <div></div>
                  <li>2.  Tap on "Create a Job."</li>
                  <div></div>
                  <li>3.  You'll be directed to a new form to fill in your service details, including title, descriptions,
                  banners, service categories, price, discounts, Content license (if applicable), FAQs, and more.</li>
                  <div></div>
                  <li>4. Once you've completed the details, tap on the "Create" button.</li>
                  <div></div>
                  <p>This easy-to-follow process allows you to post job opportunities and connect with the right
                  talents in the VModel community.</p>
                  </ol>
                  </article>`,
    creating_a_coupon: ` <article>
                  <h1>Creating a coupon</h1>
                  <p>Crafting a coupon on VModel is a breeze:</p>
                  <ol >
                  <li>1.  Click on the VModel icon logo in the middle of the bottom navigation bar.</li>
                  <div></div>
                  <li>2.  Tap on "Create a Coupon."</li>
                  <div></div>
                  <li>3. You'll be directed to a new form to input your coupon details, such as title (brand), % Off,
                  Coupon code, and expiry date if applicable.</li>
                  <div></div>
                  <li>4. Once you've completed the details, tap on the "Create" button.</li>
                  <div></div>
                  <p>This quick and easy process lets you showcase your promotions and benefits within the VModel
                  community. Give it a try and make your offers stand out!</p>
                  </ol>
                  </article>`,
    printing_portfolios_or_polaroids: `<article>
                  <h1>Printing Portfolios or polaroids</h1>
                  <div>
                  <p>
                  The Print Feature opens up a world of possibilities, enabling you to print your portfolio and
                  polaroids effortlessly. you can transform your profile into stunning visual galleries with this
                  innovative tool. With this feature, you can easily print your portfolio, allowing you to transform
                  your digital showcase into stunning visual galleries that you can hold in your hands. It's a
                  seamless way to bring your online presence into the physical realm and showcase your creativity
                  in a whole new dimension. Print, display, and share your VModel journey with the world.
                  </p>
                  </div>
                                </article>`,
    splitting_images_splitter: `<article>
                                  <h1>Splitting images (Splitter)</h1>
                                  <div>
                                    <p>
                                    Introducing the Splitter – a tool we've crafted to empower VModel members in tailoring their
                                    images seamlessly to fit the unique grid layout of the VModel portfolio. This innovative feature is
                                    a game-changer for those aiming to curate a visually striking profile without the hassle of
                                    external tools. Now, effortlessly split your frames and make your creative vision come to life
                                    within the captivating aesthetic of the VModel portfolio. Elevate your profile with the simplicity
                                    and precision of the Splitter tool.
                                    </p>
                                  </div>
                                </article>`,
  },
  feed: {
    feed: `
    <article>
      <h1>Feed</h1>
      <div>
        <p>
        The Feed is the heart of VModel, the vibrant hub of creative activity. It's where you can discover new
        talent, connect with other members, and explore the latest trends. The Feed is your gateway to
        everything happening within the VModel community. It's a dynamic space that's always evolving,
        keeping you informed and inspired as you navigate your creative journey on VModel.
        </p>
      </div>
      <ul>
      <li><a href="#">Post options</a></li>
      <!-- <li><a href="#"></a></li>--!>
      </ul>
    </article>`,
    slides: ` <article>
      <h1>Slides</h1>
      <div>
        <p>
        Experience innovation with Slides – a novel feature that introduces a gallery-like or album-like
        view, eliminating distractions when you browse through your feed or any other feed. Immerse
        yourself in a visual journey where the focus is solely on the content, free from any surrounding
        distractions. Slides revolutionise your viewing experience, providing a seamless and immersive
        way to appreciate the creative content on VModel. Explore the future of feed browsing with the
        distraction-free elegance of Slides.
        </p>
      </div>
    </article>`,
  },
  member_options: {
    follow: `<article>
              <h1>Follow</h1>
              <div>
                <p>
                The Follow function is your key to staying connected and engaged on VModel. By hitting that
                Follow button, you're signaling your interest in a member's content and updates. It's a dynamic
                way to build your personalised feed, ensuring you never miss out on the latest creations, updates,
                and inspirations from the talents you admire. Enhance your VModel experience with the Follow
                function, fostering connections and building a community that resonates with your creative
                interests.
                Tip: You can’t message a member if you only follow them. You must connect to send them a
                message.
                </p>
              </div>
              </article>`,
    connect: `<article>
              <h1>Connect</h1>
              <div>
                <p>
                The Connect function not only lets you establish meaningful relationships but also enables
                direct communication through messaging with your connections. Unlike the Follow feature, this
                personal touch allows for more direct and private interaction with those you connect with. For
                those who prefer a follower-centric experience, you have the flexibility to manage your <u>connection settings</u>. If you only want followers, simply <u>turn of connections</u> in your settings. It's
                your choice, offering a personalised and tailored social experience on VModel.
                </p>
              </div>
              </article>`,
    job_notifications: `<article>
              <h1>Connect</h1>
              <div>
                <p>
                Receive Job Notifications tailored to your interests! When you follow or connect with your
                favourite brands or members on VModel, you have the option to turn on Job Notifications. This means
                you'll be alerted whenever they post new job opportunities, ensuring you never miss out on exciting chances that align with your creative passions. Stay in the loop and stay engaged with
                the Job Notifications feature, keeping your opportunities at your fingertips. Customize your
                experience on VModel to match your creative aspirations effortlessly.
                </p>
              </div>
              <div></div>  
              <div></div>  
              <h2>How to turn on job notifications:</h2>
                Activate Job Notifications with these simple steps:
                <ol>
                <li>1. Navigate to the member's profile.</li>
                <li>2. Tap on the information button located at the top right.</li>
                <li>3. Among the options presented, toggle the switch to turn on job notifications for that member.</li>
                <div></div>  
                <div></div>
                Stay in the know about job opportunities from your favourite brands or members by customising your Job Notifications settings effortlessly on VModel.
                </ol>
              </article>`,
    post_notifications: `<article>
    <h1>Connect</h1>
    <div>
      <p>
      Get the latest updates with Post Notifications! When you follow your preferred brands or members on
      VModel, you can activate Post Notifications to stay informed about their new content. This
      feature ensures that you receive timely alerts whenever they make a new post, keeping you
      connected and engaged with the latest creative expressions. Stay in sync with your favourite
      creators and brands, customize your VModel experience, and never miss out on the captivating
      content you love. Elevate your social experience by tailoring it to your creative preferences
      effortlessly.
      </p>
    </div>
    <div></div>  
    <div></div>  
    <h2>How to turn on Posts Notifications:</h2>
      Turn on Post Notifications following these straightforward steps:      <ol>
      <li>1. Visit the profile of the member or brand you want to follow closely.</li>
      <li>2. Tap on the information button located at the top right corner of thier profile.</li>
      <li>3. . In the options presented, toggle the switch to turn on post notifications for that member or brand.</li>
      <div></div>  
      <div></div>
      Stay connected with the latest content from your favourite creators and brands on VModel by
      customising your post notification settings effortlessly.
      </ol>
    </article>`,
    coupons_notifications: `<article>
              <h1>How to turn on coupons notifications</h1>
              <div>
                  <ol>
                    <li><p>1. Head to the profile of the member or brand from whom you want to receive coupon updates.</p></li>
                    <div></div>
                    <li><p>2. Tap on the information button situated at the top right corner of their profile.</p></li>
                    <div></div>
                    <li><p>3. Within the options available, toggle the switch to turn on coupon notifications for that member or brand</p></li>
                  </ol>   
                  <div></div>
                  <div></div>
                <p>Stay informed about the latest coupons and offers from your preferred creators, members or brands
                on VModel by effortlessly customising your coupon notification settings.</p>
              </div>
              </article>`,
  },
  discover: {
    discover: `<article>
                <h1>Discover</h1> 
                <p>The Discover Page is your comprehensive guide to unlocking the full potential of VModel,
                connecting you with opportunities, talents, and insights that resonate with your creative journey.
                Explore the diverse offerings and elevate your experience on VModel:</p>

                <ol>
                  <li>1. <strong>Discover Coupons</strong><p>Unearth exciting discounts and promotions from your favourite creators and
                  brands to enhance your VModel experience.</p></li>
                  
                  <div></div>
                  
                  <li>2. <strong>New Talent Around You:</strong><p>Find and Connect with emerging talents in your vicinity, expanding
                  your creative network and maintain ease of collaboration.</p></li>
                  
                  <div></div>
                  
                  <li>3. <strong>Suggestions on Connections: </strong><p>Receive recommendations on members to connect with, fostering
                  new and valuable relationships.</p></li>
                  
                  <div></div>
                  
                  <li>4. <strong>Suggestions on Who to Follow:</strong><p>Stay in the loop with curated suggestions on who to follow,
                  tailored to your creative interests.</p></li>
                  
                  <div></div>

                  <li>5. <strong>. VModel's Blog (Vell Magazine):</strong><p>Vell Magazine, VModel's digital creative online magazine, is a
                  dedicated platform that aims to immerse members in the vibrant tapestry of the creative industry.
                  This dynamic magazine serves as a hub for insightful articles, features, and updates tailored to
                  keep members informed about the latest trends, innovations, and happenings within the creative
                  realm.</p></li>

                </ol>
                <div><p>Our mission at Vell Magazine is to provide a thoughtfully curated space that not only showcases
                the diverse talents thriving within the VModel community but also acts as a reservoir of knowledge for individuals passionate about the creative arts. Whether you're seeking inspiration,
                industry insights, or want to stay abreast of emerging trends, Vell Magazine is your go-to source.</p>
                <div></div>

                <p>From in-depth interviews with influential creatives to explorations of cutting-edge technologies,
                Vell Magazine covers a spectrum of topics designed to enrich your understanding of the everevolving creative landscape. Whether you're a model, photographer, influencer, or anyone with
                a keen interest in the creative arts, Vell Magazine invites you to embark on a journey of discovery,
                creativity, and knowledge.</p>
                </div>
    </article>`,
    member_search_and_hashtags: `
    <article>
      <h1>Member Search and Hashtags</h1>
      <div>
        <p>Discover Page Member Search and Hashtags:</p>
        <ol>
          <li><p>1. Navigate to the Discover Page: Open the Discover Page on VModel.
          </p></li>
          <div></div>
          <li><p> 2. Initiate Keyword Search: Use the search bar and enter your desired keyword.</p></li>
          <div></div>

          <li><p> 3. Tabbed Results View: Explore the results in a tabbed view with two main sections:</p></li>
        </ol>
        <div style={{marginLeft:13px;}}>
          <ul>
            <li> <strong>Members Tab:</strong>Discover profiles, creators, and talents related to the entered keyword in the
            member base.</li>

            <li> <strong>Hashtags Tab:</strong>Dive into thematic content featuring the searched hashtag in its caption</li>
          </ul>
        </div>
      </div>
    </article>

    `,
    spotlight: `<article>
      <h1>Spotlight</h1>
      <div>
        <p>
        Spotlight on VModel is a curated space that brings together a diverse mix of creatives, whether
        they are excelling in sales or receiving high feedback ratings. This dynamic section highlights
        individuals who have made a significant impact within the VModel community, showcasing a
        blend of commercial success and positive engagement. It's a spotlight on excellence, featuring
        creators who stand out for their achievements and positive contributions, creating an enriching
        experience for all VModel members.
        </p>
      </div>
    </article>`,
    most_popular_talent_near_you_rising_talent: `
    <article>
      <h1>Most Popular Talent Near You, Rising Talent</h1>
      <div>
        <p> Explore Diversity with VModel's Featured Sections:</p>
        <ol>
          <li><p>1. Most Popular:</p> 
            <ul>
            <li>Delve into the creations that have captured the community's attention.</li>              
            <li> Discover the most popular content, creators, and trends on VModel.</li>              
            <li>A spotlight on what's trending and gaining widespread acclaim.</li>
            </ul>
          </li>
          <li><p>2. Talent Near You:</p> 
            <ul>
              <li>Connect with creatives in your vicinity, fostering local collaborations.</li>              
              <li>Discover the diverse talents residing in your geographic area.</li>              
              <li>A personalised showcase that brings the creative community closer.</li>
            </ul>
          </li>
          <li><p>3. Rising Talent:</p> 
            <ul>
              <li>Uncover emerging stars and rising talents within the VModel community.</li>              
              <li>Explore the latest works and promising profiles on the ascent.</li>              
              <li>A dedicated space for celebrating and discovering the next wave of creative brilliance.</li>
            </ul>
          </li>
        </ol>
        <div></div>
        <p>
        Each section offers a unique lens into the dynamic and diverse world of VModel, providing you
        with tailored experiences based on popularity, local connections, and the excitement of
        emerging talents. Explore, connect, and celebrate creativity in its many forms.
        </p>
      </div>
    </article>
    `,
  },
  settings: {
    portfolio_settings: `<article>
    <h1>Porfolio settings</h1>
    <div>
    <p>
    Within Portfolio Settings, you have the flexibility to fine-tune and customise all the features we
    previously discussed in your portfolio. This comprehensive control allows you to adjust your bio,
    Display name, themes, visual elements, descriptions, and media content. Whether you're
    updating contact information, optimising privacy settings, or refining the overall appearance of
    your portfolio, Portfolio Settings empower you to craft a showcase that perfectly aligns with your
    creative vision within the dynamic VModel community.
    </p><div></div><p>To customise your portfolio, simply go to the menu, then navigate to settings. You'll find the
    Portfolio Settings option conveniently located in this section.
    </p>
    </div>
    </article>`,
    account: `<article>
    <h1>Account</h1>
    <div>
    <p>
    Within Account Settings, you have the flexibility to adjust various features related to your
    account, such as personal information, email, phone number, or location. All these settings are
    at your fingertips, providing you with the ability to customise and refine your account details
    according to your preferences.
    </p><div></div>
    <p>To customise your account details, simply navigate to the menu and then select settings. You'll
    find the Account Settings option conveniently located here.
    </p>
    </div>
    </article>`,
    galleries: `<article>
    <h1>Galleries</h1>
    <div>
    <p>
    Within Gallery Settings, you have the power to customize all aspects of your galleries – those
    captivating albums in your portfolio. Whether you want to <b>edit</b>, <b>rename</b>, or <b>delete galleries</b>,
    either from either your portfolio or your polaroid. This centralised space gives you complete
    control over the presentation and organisation of your visual narrative on VModel.
    </p><div></div>
    <p>To edit your galleries, head to the menu, and then access settings. Gallery settings are located within settings.
    </p>
    </div>
    </article>`,
    payments: `<article>
    <h1>Payments</h1>
    <div>
    <p>
    Within Payment Settings, you have the flexibility to adjust all payment-related settings. Easily
    add or remove payment methods and make changes to your currency type where applicable.
    </p><div></div>
    <p>To edit your galleries, head to the menu, and then access settings. Gallery settings are located within settings.
    </p>
    <div></div>
    <p>To edit your payments, head to the menu, and then access settings. Payment settings are
    located within settings.</p>
    </div>
    </article>`,
    feed: `<article>
    <h1>Feed</h1>
    <div>
    <p>
    VModel's feed is a dynamic and visual stream that presents a curated collection of content from
    its diverse community of creatives. Comprising images, videos, and other creative expressions,
    the feed showcases the latest updates, projects, and artistic endeavors of models, influencers or
    creators, photographers, cooks, and various other creative individuals. Members can scroll
    through this vibrant feed to discover new content, stay updated on the latest trends, and engage
    with the artistic narratives shared by fellow VModel community members. It serves as a central
    space for creative exploration, connection, and inspiration within the VModel platform.
    </p><div></div>
    <p>To edit your galleries, head to the menu, and then access settings. Gallery settings are located within settings.
    </p>
    <div></div>
    <p>From feed settings, you can adjust the <b>default feed view</b></p>
    </div>
    </article>`,
    notifications: `<article>
    <h1>Notification</h1>
    <div>
    <p>
    Within Notifications Settings, you have the ability to customize all notification preferences
    according to your preferences. Tailor your notification experience by adjusting options related to
    messages, job updates, and more.
    </p><div>
    <div></div>
    <p>To change/ update your notifications settings, head to the menu, and then access settings.
    notifications settings are located within settings.</p>
    </div>
    </article>`,
    verification: `<article>
    <h1>Verification</h1>
    <div>
    <p>
    Within Verification Settings, you can take two key actions to enhance your profile's credibility.
    First, you can apply for ID verification, symbolised by a grey tick. Second, you can apply for blue
    tick verification, a symbol of fame-based verification. It's essential to note that VModel
    mandates verification for those participating in remote jobs or services, ensuring a secure and
    trustworthy environment. The grey tick signifies ID verification, while the blue tick represents
    verification based on fame within the VModel community. These verification measures
    contribute to a safer and more reliable experience for all members.
    </p>
    </div>
    </article>`,
    permissions: `<article>
    <h1>Permissions</h1>
    <div>
    <p>- Manage and control who can interact with your content and connect with you.</p>
    </div></article>`,
    appearance: `<article>
    <h1>Appearance</h1>
    <div>
    <p>- customise the visual aspects of your VModel experience, including themes and layouts.</p>
    </div></article>`,
    security_and_privacy: `<article><h1>Security and Privacy</h1><div><p>- Enhance account security, manage privacy settings, and control data access.</p></div>
    </article>`,
  },
  my_network: {
    my_connections: `<article>
    <h1>My Connections</h1>
    <p>
    My Connections" on VModel is your gateway to building meaningful relationships within our
    creative community. These are members you've connected with through mutual acceptance of connection requests, offering potential collaboration opportunities.
    </p>
    <div></div>
    <p>
    Your connections represent a valuable resource for finding like-minded individuals and engaging
    in direct, secure conversations. It's not just about the number of connections but the quality,
    fostering a community where collaboration thrives.
    </p>
    <div></div>

    <p>
    Remember, you can exclusively message members within your connections, ensuring a private
    and secure communication environment. Connect, explore, and let the creativity flow within
    your personalised network on VModel
    </p>
    </article>`,
    sent_requests: `<article>
    <h1>Sent Requests</h1>
    <div>

    <p>

    Your "Sent Requests" on VModel allows you to track and manage the connection requests you've
    extended to other members. This section provides insight into the status of your outreach efforts
    My Connections
    Sent Requests
    —while they are pending. If your goal is to expand your creative network and connect with
    individuals whose work resonates with you, "Sending Requests" is your window into the progress
    of these outreach endeavours. When you send out a connection request to a member of the
    VModel community, your account automatically follows the person, and you can unfollow them
    from your followings section if you wish to.
    
    </p>
    </div>
    <div>
    - <a href="#">How to send a connection request</a>
    </div>
    </article>`,
    received_requests: `<article>
    <h1> Received requests</h1>
    <p> Your "Received Requests" section on VModel offers a glimpse into the connection requests others
    have extended to you. It provides valuable insight into the potential collaborators who find
    resonance in your work. As you navigate through these requests, you gain the opportunity to
    build a diverse and dynamic network within the VModel community. Whether you're a model
    sought after by photographers or a makeup artist attracting collaboration proposals, this section
    serves as your gateway to expanding your creative connections</p>
    </article>`,
    followings: `<article>
    <h1>Followings</h1>

 <p>
 Your "Followings" section on VModel serves as a curated list of individuals whose creative
 journeys you've chosen to follow. This feature allows you to stay connected with the work,
updates, and activities of those who inspire you within the VModel community. It's not just about
extending connection requests; "Followings" is your personalised window into the ongoing
creative endeavours of others. Whether you're a model following photographers, a photographer
following models, or a makeup artist following other creatives, this section fosters a sense of
community and continuous inspiration.
</p>

<div></div>
<p>
<b>
Note:
</b>
 Any member(s) you sent a connection request to will appear in your followings. You can
change this by simply unfollowing them.
</p>

<div>
- <a href="#"> How to unfollow a member</a>
</div>
</article>`,
    followers: `<article>
    <h1>Followers</h1>
    <p>
    The "Followers" section on VModel is a dynamic collection of individuals who have chosen to
stay connected with your creative journey. These are the members who find inspiration in your
work and have opted to receive updates from your profile. Similar to "Sent Requests," this section
offers insight into the progress of your outreach efforts—illustrating the growth of your creative
network and the resonance your work has within the VModel community. Your followers represent
an engaged audience, and each connection is a testament to the impact of your creative
expression. Embrace the support from your followers and continue to share the magic of your
artistic endeavours on VModel.
    </p>
    <div></div>
    <p>
    It's important to note that your connections will naturally be included in your followers, however,
keep in mind that if any of your connections choose to unfollow you, they will no longer appear in
your followers list</p>
    </article>`,
    my_contacts: `<article>
    <h1>My Contacts</h1>
    <p>
    The "My Contacts" feature on VModel empowers you to bridge the gap between your online and
    real-life creative networks. Here, you can invite your existing contacts to join the VModel
    community, creating a seamless integration of your professional connections. Whether they are
    clients, collaborators, or friends from your creative journey, inviting them to VModel ensures that
    your online platform reflects the full spectrum of your real-life connections. Expand your reach
    and strengthen your community by bringing your contacts into the VModel fold, making it a
    holistic space for both online networking and real-world collaborations.
    </p>
    <div>
    - <a href="#">
    How to invite a contact to the VModel platform
    </a>
    
    </div>
    <div></div>
    </article>`,
    blocked_account: `<article>
    <h1> Blocked Accounts </h1>
    <p>

    The "Blocked Accounts" section on VModel empowers you to maintain control over your online
experience. This feature allows you to track and manage accounts that you have chosen to
block, ensuring a tailored and secure creative environment. If you encounter content or
interactions that are not aligned with your vision or values, "Blocked Accounts" serves as your
protective shield. It's your window into maintaining a positive and respectful space within the
VModel community, allowing you to curate your creative network in a way that resonates with
your goals and values.
    </p>
    <div></div>
    <ul>
<li><a href="#">How to block an account</a></li>
<li><a href="#">How to report an account</a></li>
    </ul>
    <div></div>
    </article>`,
  },
  vmodel_credits: {
    vmc_and_how_they_work: `<article>
    <h1>VModel Credits and How They Work</h1>

    <div>
    <p>
    Discover the power of VMC Points, VModel's virtual currency crafted to enhance your platform adventure. Earn these points through various activities such as completing gigs, active community engagement, and special events. Your accumulated VMC Points open doors to a realm of rewards—unlock exclusive features, access premium content, and enjoy discounts from our esteemed partner brands. Beyond being a mere virtual currency, VMC Points introduce a gamified aspect, turning your participation into a showcase of achievements. Join in the community spirit, celebrate creativity, and contribute positively as you earn and redeem VMC Points. Dive into a world where creativity is celebrated, and rewards await. For in-depth insights into earning and redeeming points, explore our Help Centre sections. Happy creating!

    </p>
    </div>
    </article>`,
  },
};

export const egHTML = `<article>
<div></div>
<h1>This is just a dummy content</h1>
<div></div>
<span>
  <p>
    <span style="font-weight: 400;">To have a safe and successful selling experience on Vinted, simply follow these tips:</span><span style="font-weight: 400;"><br></span>
  </p>
  <div>1. Build<span style="font-weight: 400;"> a trusted</span><span style="font-weight: 400;"> profile, adjust your settings</span></div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Add your profile picture and </span><a href="https://www.vinted.co.uk/help/406?access_channel=hc_topics"><span style="font-weight: 400;">verify your account</span><span style="font-weight: 400;"> </span></a><span style="font-weight: 400;">to show </span><span style="font-weight: 400;">you’re a real person</span><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Write something about yourself in the "About you" section.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">If you wish to exclude certain carriers from your listings, </span><a href="https://www.vinted.co.uk/help/447?access_channel=hc_topics"><span style="font-weight: 400;">adjust your shipping options</span></a><span style="font-weight: 400;">.&nbsp;</span></li>
  </ul>
  <div>2. List your items</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Find out </span><a href="https://vinted.co.uk/catalog-rules"><span style="font-weight: 400;">what you can sell on Vinted</span></a><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Add a few nice, clear </span><a href="https://www.vinted.co.uk/help/48?access_channel=hc_topics"><span style="font-weight: 400;">photos of the item</span></a><span style="font-weight: 400;">. If it’s an item by a well-known brand, </span><span style="font-weight: 400;">add at least 5 pictures of it to show its authenticity.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Be specific and honest in the </span><a href="https://www.vinted.co.uk/help/49?access_channel=hc_topics"><span style="font-weight: 400;">item's description</span></a><span style="font-weight: 400;">, and select the correct </span><a href="https://www.vinted.co.uk/help/51?access_channel=hc_topics"><span style="font-weight: 400;">parcel size</span></a><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Remember that listing has no fees,&nbsp;and uploading more items can help you sell faster.</span></li>
  </ul>
  <div>
    <blockquote>
      <div>
        <div><strong>Note</strong></div>
        <div><span style="font-weight: 400;">Once you upload an item, it might get screened automatically to go through</span><strong> </strong><span style="font-weight: 400;">a standard check to make sure it follows our </span><a href="https://vinted.co.uk/catalog-rules">Catalogue Rules</a><span style="font-weight: 400;"> and guidelines for selling. Normally, it takes up to 1 minute but, in some cases, can take up to 1 or 2 days.</span></div>
      </div>
    </blockquote>
  </div>
  <div>3. While you wait for buyers</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Get noticed </span><span style="font-weight: 400;">—</span><span style="font-weight: 400;"> </span><a href="https://www.vinted.co.uk/help/340?access_channel=hc_topics"><span style="font-weight: 400;">Bump your items</span></a><span style="font-weight: 400;"> and </span><a href="https://www.vinted.co.uk/help/452?access_channel=hc_topics"><span style="font-weight: 400;">use Wardrobe Spotlight</span></a><span style="font-weight: 400;"> to boost your wardrobe’s visibility.</span></li>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/422?access_channel=hc_topics"><span style="font-weight: 400;">Set a discount</span></a><span style="font-weight: 400;"> for item bundles: this may encourage members to buy more items from you.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Once a buyer contacts you, use </span><a href="https://www.vinted.co.uk/help/258?access_channel=hc_topics"><strong>Make an offer</strong></a><span style="font-weight: 400;"> button to suggest a better price for a single item.&nbsp;</span></li>
  </ul>
  <div>
    <blockquote>
      <div>
        <div><strong>Important</strong></div>
        <div><span style="font-weight: 400;">Stay on Vinted throughout your whole selling process </span><span style="font-weight: 400;">—</span><span style="font-weight: 400;"> from communicating to receiving your payment. This way we will be able to </span><a href="https://www.vinted.co.uk/help/551?access_channel=hc_topics"><span style="font-weight: 400;">cover you</span></a><span style="font-weight: 400;"> in case something goes not the way you expected.&nbsp;</span></div>
      </div>
    </blockquote>
  </div>
  <div>4. It’s sold! Time to ship</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/65?access_channel=hc_topics"><span style="font-weight: 400;">Pack your item</span></a><span style="font-weight: 400;">. A personal touch is always nice.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Ship the item within 5</span><span style="font-weight: 400;"> working </span><span style="font-weight: 400;">days of the sale.&nbsp;</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Use the shipping option your buyer has chosen to avoid any issues with parcel tracking or even canceled orders.</span></li>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/100?access_channel=hc_topics"><span style="font-weight: 400;">Track your parcel</span></a><span style="font-weight: 400;"> on Vinted if you’d like to.</span></li>
  </ul>
  <div>5. Delivered! Get your earnings and leave feedback</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">As soon as the buyer presses </span><strong>Everything is OK</strong><span style="font-weight: 400;">, your payment will become available in your </span><a href="https://www.vinted.co.uk/help/266?access_channel=hc_topics"><span style="font-weight: 400;">Vinted balance</span></a><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Money withdrawals</span><span style="font-weight: 400;"> may take up to </span><span style="font-weight: 400;">5 working days</span><span style="font-weight: 400;"> to appear in your bank account.&nbsp;</span></li>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/14?access_channel=hc_topics"><span style="font-weight: 400;">Leave feedback</span></a><span style="font-weight: 400;"> for your buyer and help to build trust within the community.</span></li>
  </ul>
  <div>Good to know</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">If you ever experience any improper behaviour, harassment or spam activities from other members, </span><a href="https://www.vinted.co.uk/help/288?access_channel=hc_topics"><span style="font-weight: 400;">report it</span></a><span style="font-weight: 400;"> so we can immediately put a stop to it.</span></li>
  </ul>
</span>
</article>
`;
