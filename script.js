// Typing Effect
const texts = ["Product Owner", "Business Analyst"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentText = texts[index];
    const displayedText = currentText.substring(0, charIndex);
    document.getElementById("typing").innerText = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        typingSpeed = 100;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        typingSpeed = 50;
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, typingSpeed);
}
typeEffect();

// Smooth Scroll for Nav Links
const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-section');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: "smooth"
            });
        }

        // Close the navbar on mobile after clicking a link
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// Project Details Logic
document.addEventListener("DOMContentLoaded", function () {
    const projectDetailsSection = document.getElementById('project-details');
    const projectDetailsContent = document.getElementById('project-details-content');

    // Function to show all sections except project-details
    function showAllSections() {
        document.querySelectorAll('section').forEach(section => {
            if (section.id !== 'project-details') {
                section.classList.remove('hidden');
            }
        });
    }

    // Function to show project details
    function showProjectDetails(projectId) {
        // Hide all sections except the project details
        document.querySelectorAll('section').forEach(section => {
            if (section.id !== 'project-details') {
                section.classList.add('hidden');
            }
        });

        // Show the project details section
        projectDetailsSection.classList.remove('hidden');

        // Load content dynamically
        let content = '';
        switch (projectId) {
            case 'project1':
                content = `
                    <div class="project-header bg-primary text-white text-center py-4">
                        <h1>AI-Powered Copyright & Patent Detection Tool</h1>
                        <p class="lead">Protecting Designs, Preventing Legal Risks</p>
                    </div>
            
                    <section class="container my-5">
                        <h2 class="text-center mb-4">Short Summary</h2>
                        <p class="text-center">
                            An AI-powered tool that detects copyright and patent risks in design files, providing instant compliance insights. Seamlessly integrating with design tools, it safeguards creativity and prevents legal issues.
                        </p>
                    </section>
            
                    <section class="container my-5">
                        <h2 class="text-center mb-4">Product Strategy</h2>
                        <div class="row">
                            <!-- Vision and Mission -->
                            <div class="col-md-6 mb-4">
                                <h3>Vision and Mission</h3>
                                <p><strong>Vision:</strong> Empower designers, companies, and legal teams to identify and resolve copyright and patent risks in their designs, protecting creativity and avoiding costly litigation.</p>
                                <p><strong>Mission:</strong> Create an AI-powered platform that scans design files (like JPG, JPEG, and PDF) to detect potential copyright or patent issues. It compares visual elements against a large database of protected assets and offers actionable insights to modify or remove risky components.</p>
                            </div>
                            <!-- Problem Statement -->
                            <div class="col-md-6 mb-4">
                                <h3>Problem Statement</h3>
                                <p><strong>Current Challenge:</strong> Designers and companies can accidentally use protected designs, leading to expensive fines and legal battles.</p>
                                <p><strong>The Need:</strong> An automated tool that quickly checks design files for copyright or patent issues to ensure compliance before release.</p>
                            </div>
                        </div>
                    </section>
            
                    <section class="container my-5">
                        <h2 class="text-center mb-4">Target Audience</h2>
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Graphic and Product Designers</h5>
                                        <p class="card-text">Ensure your designs are original and free from legal risks.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Creative Agencies</h5>
                                        <p class="card-text">Protect your clients' work and avoid costly legal disputes.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Legal Departments</h5>
                                        <p class="card-text">Streamline intellectual property compliance checks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            
                    <section class="container my-5">
                        <h2 class="text-center mb-4">Go-to-Market Strategy</h2>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <h3>Pricing Model</h3>
                                <ul>
                                    <li>SaaS subscription tiers (basic, professional, enterprise).</li>
                                    <li>Free trial period or freemium model for early adopters.</li>
                                </ul>
                            </div>
                            <div class="col-md-6 mb-4">
                                <h3>Marketing Channels</h3>
                                <ul>
                                    <li>Content Marketing: Blogs, social media, webinars.</li>
                                    <li>Partnerships: Design schools, creative communities, legal firms.</li>
                                    <li>Digital Advertising: LinkedIn, Google Ads.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
            
                    <section class="container my-5">
                        <h2 class="text-center mb-4">Product Requirements Document (PRD)</h2>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <h3>Key Features</h3>
                                <ul>
                                    <li>File Support: Upload JPG, JPEG, and PDF files.</li>
                                    <li>AI Analysis: Image recognition and OCR.</li>
                                    <li>Compliance Reporting: Flags high-risk elements.</li>
                                    <li>Integration & Security: API integration and GDPR compliance.</li>
                                </ul>
                            </div>
                            <div class="col-md-6 mb-4">
                                <h3>APIs and Technologies</h3>
                                <ul>
                                    <li>Google Cloud Vision API</li>
                                    <li>Microsoft Azure Computer Vision API</li>
                                    <li>Amazon Rekognition</li>
                                    <li>Tesseract OCR</li>
                                </ul>
                            </div>
                        </div>
                    </section>
            
                    <!-- Block Diagram / Flow Chart Section -->
                    <section class="container my-5">
                        <h2 class="text-center mb-4">Block Diagram / Flow Chart</h2>
                        <div class="text-center">
                            <img src="images/project1 image1.png" alt="Block Diagram" class="img-fluid" style="max-width: 100%; height: auto;">
                            <p class="mt-3"><strong>Flow:</strong> User Upload → AI Analysis → Compliance Check → Report Generation</p>
                        </div>
                    </section>
            
                    <!-- UI Design Section -->
                    <section class="container my-5">
                        <h2 class="text-center mb-4">UI Design</h2>
                        <div class="text-center">
                            <img src="images/project1 image2.png" alt="UI Design" class="img-fluid" style="max-width: 100%; height: auto;">
                            <p class="mt-3"><strong>Key Features:</strong> Intuitive dashboard, drag-and-drop file upload, and compliance report.</p>
                        </div>
                    </section>
                `;
                break;
            case 'project2':
                content = `
                     <div class="project-header text-white text-center py-4">
    <h1>AI-Powered Interest Identifier</h1>
    <p class="lead">Helping students and professionals make informed career choices effortlessly.</p>
  </div>

  <!-- Short Description Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Short Description</h2>
    <p class="text-center">
      An intelligent AI-driven tool that analyzes user responses to identify career interests with precision. It delivers personalized recommendations, helping students and professionals make informed career choices effortlessly.
    </p>
  </section>

  <!-- Vision Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Vision</h2>
    <p class="text-center">
      Empowering students and professionals to reach their full potential with personalized, data-driven career insights. The vision is to become the most trusted AI-powered platform for career discovery and guidance worldwide.
    </p>
  </section>

  <!-- Mission Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Mission</h2>
    <p class="text-center">
      The goal is to create a highly accurate (99.9%), engaging, and accessible AI-powered assessment that generates personalized questionnaires and career recommendations. By integrating advanced machine learning, dynamic content generation, and user-friendly design, this innovation aims to transform career planning.
    </p>
  </section>

  <!-- Problem Statement Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Problem Statement</h2>
    <p class="text-left">
      Many students and professionals struggle to choose a career due to:
    </p>
    <ul class="list-unstyled text-left">
      <li>Lack of Guidance – Generic career advice without personal insights.</li>
      <li>Too Many Choices – Hard to find the right path among countless options.</li>
      <li>Unreliable Tests – Most career assessments are too simple or inaccurate.</li>
      <li>AI-powered solution solves this with a precise, personalized assessment that helps users find the best career fit.</li>
    </ul>
  </section>

  <!-- Key Features Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Key Features & Functionalities</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Smart Questionnaire</h5>
            <p class="card-text">AI selects 100 MCQs based on user profile and past responses for a personalized experience.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">AI Analysis</h5>
            <p class="card-text">Advanced machine learning recommends two best-fit career fields with high accuracy.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">User-Friendly Design</h5>
            <p class="card-text">Smooth, responsive web and mobile interfaces (React, Flutter) for easy access.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Detailed Reports</h5>
            <p class="card-text">Career insights, confidence scores, and follow-up assessments for continuous guidance.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Secure & Private</h5>
            <p class="card-text">Strong authentication (OAuth/JWT) with user profiles and result tracking.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Seamless Integration</h5>
            <p class="card-text">RESTful APIs for smooth connectivity with career databases and educational resources.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Business Model Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Business Model</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <h3>Revenue Streams</h3>
        <ul>
          <li>Freemium Model: Free basic assessments with premium upgrades (detailed reports, one-on-one expert consultations, advanced analytics).</li>
          <li>Institutional Licensing: Custom packages for schools, colleges, and career counseling centers.</li>
          <li>Subscription Plans: Monthly or annual plans for continuous career guidance and periodic reassessments.</li>
        </ul>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Marketing & Distribution</h3>
        <ul>
          <li>Digital Marketing: Leverage SEO, SEM, and social media channels to reach students and professionals.</li>
          <li>Partnerships: Collaborate with educational institutions, career fairs, and online learning platforms.</li>
          <li>Content Marketing: Develop informative content (blogs, webinars, case studies) to educate potential users on the benefits of personalized career guidance.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Flow Chart Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Flow Chart</h2>
    <div class="text-center">
      <img src="images/project2 image1.png" alt="Flow Chart" class="img-fluid" style="max-width: 100%; height: auto;">
      <p class="mt-3"><strong>Flow:</strong> User Input → AI Analysis → Personalized Recommendations → Detailed Reports</p>
    </div>
  </section>
                `;
                break;
            case 'case1':
                content = `
                   <div class="project-header text-white text-center py-4">
    <h1>Stop Forcing Sales. Start Attracting Demand!</h1>
    <p class="lead">A Smarter Approach to Banking Sales</p>
  </div>

  <!-- Introduction Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Introduction</h2>
    <p class="text-center">
      Traditional banking sales rely heavily on cold calling and aggressive outreach to push credit cards, loans, and other financial products. This approach is not only costly but also leads to low conversion rates and high customer dissatisfaction.
    </p>
    <p class="text-center">
      Instead of forcing financial products onto uninterested customers, banks can shift towards a value-driven attraction strategy—offering compelling, exclusive benefits that naturally draw genuinely interested customers.
    </p>
  </section>

  <!-- Challenges Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Challenges with Cold Calling & Sales BPO Investments</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">High Costs, Low ROI</h5>
            <p class="card-text">Banks invest millions in BPO operations to hire agents who make mass cold calls. The conversion rate is below 2%, making it a highly inefficient approach.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Customer Dissatisfaction & Brand Damage</h5>
            <p class="card-text">Customers feel harassed by repeated calls, leading to a negative brand perception. Spam calls also contribute to regulatory risks and compliance penalties.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Targeting the Wrong Audience</h5>
            <p class="card-text">Cold calls often reach people who don’t need or can’t afford the product. The ‘spray and pray’ approach ignores customer preferences and financial behavior.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Solution: Shifting to a Value-Driven Attraction Model</h2>
    <p class="text-center">
      Instead of spending on mass cold calling, banks should invest in creating unique, high-value offers that differentiate them from competitors.
    </p>
    <div class="row">
      <div class="col-md-6 mb-4">
        <h3>Key Elements of a Value-Driven Strategy</h3>
        <ul>
          <li>Personalized Offers – Use AI and data analytics to match customers with relevant financial products.</li>
          <li>Exclusive Benefits – Provide market-differentiating perks that no competitor offers.</li>
          <li>Content & Digital Marketing – Use blogs, videos, and financial tools to educate and attract customers.</li>
          <li>Referral & Loyalty Programs – Encourage satisfied customers to bring in more business.</li>
          <li>Opt-in Engagement – Allow customers to choose interactions rather than being interrupted.</li>
        </ul>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Case Example: A Bank’s Success with Value-Driven Attraction</h3>
        <p>
          A bank reduced its cold calling efforts by 70% and reallocated those funds towards:
        </p>
        <ul>
          <li>AI-driven targeted marketing</li>
          <li>Exclusive rewards (e.g., zero processing fees for loyal customers)</li>
          <li>Content-driven lead generation via educational blogs, videos, and financial tools</li>
        </ul>
        <p><strong>Results Achieved:</strong></p>
        <ul>
          <li>📈 25% increase in organic credit card applications (without spam calls!)</li>
          <li>💰 30% reduction in customer acquisition cost (CAC)</li>
          <li>🤝 Higher customer retention & satisfaction scores</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Visual Insights Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Visual Insights</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <h3>Comparison: Cold Calling vs. Value-Driven Attraction</h3>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Cost Investment</th>
              <th>Conversion Rate</th>
              <th>Customer Satisfaction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cold Calling</td>
              <td>High</td>
              <td>Low (<2%)</td>
              <td>Low (negative brand impact)</td>
            </tr>
            <tr>
              <td>Value-Driven Attraction</td>
              <td>Medium</td>
              <td>High (>20%)</td>
              <td>High (better brand trust)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Customer Journey in a Value-Driven Model</h3>
        <ol>
          <li>Identify Real Demand</li>
          <li>Offer Tailored Benefits</li>
          <li>Create Awareness (Content & Digital Marketing)</li>
          <li>Allow Customer Opt-in</li>
          <li>Higher Engagement & Sales</li>
        </ol>
      </div>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Conclusion: The Future of Banking Sales</h2>
    <p class="text-center">
      Banks must stop chasing uninterested customers and start attracting those who genuinely need financial solutions.
    </p>
    <p class="text-center">
      <strong>If a person doesn’t want a mango, even the cheapest mango won’t convince them. But if they crave mangoes, they’ll buy the most premium one.</strong>
    </p>
  </section>
                `;
                break;
            case 'case2':
                content = `
                    <div class="project-header text-white text-center py-4">
    <h1>Crowdsourced Innovation – Unlocking Growth by Inviting Customer Ideas</h1>
    <p class="lead">Innovate with your customers, not just for them.</p>
  </div>

  <!-- Introduction Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Introduction</h2>
    <p class="text-center">
      Innovation doesn’t just happen in boardrooms—it comes from the people who use products and services daily. Companies that actively seek customer-generated ideas gain fresh insights, reduce innovation costs, and build stronger brand loyalty.
    </p>
    <p class="text-center">
      By adding a simple “Suggest Your Idea” feature on their website (with a reward for great contributions), businesses can tap into real-world, unfiltered feedback that drives meaningful improvements.
    </p>
  </section>

  <!-- Challenges Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Challenges in Traditional Innovation Approaches</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Internal Blind Spots</h5>
            <p class="card-text">Companies often rely solely on internal teams for product innovation, overlooking everyday customer pain points. Many breakthrough ideas come from unexpected sources, such as power users and niche audiences.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">High Costs of Market Research & Consulting</h5>
            <p class="card-text">Hiring consultants and research firms can be expensive. Customer-generated ideas provide organic, no-cost innovation directly from end-users.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Lack of Customer Engagement</h5>
            <p class="card-text">Traditional businesses struggle to create a community-driven product development cycle. When customers feel unheard, brand engagement and loyalty decline.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Solution: Implementing a Customer Idea Submission Model</h2>
    <p class="text-left">
      How It Works:
    </p>
    <ol class="text-left">
      <li>Customers Submit Ideas</li>
      <li>Business Reviews & Shortlists Viable Ideas</li>
      <li>Selected Ideas Receive Rewards (Gift/Recognition)</li>
      <li>Implemented Ideas Enhance the Business & Build Customer Loyalty</li>
      <li>More Customers Engage → Continuous Innovation</li>
    </ol>
  </section>

  <!-- Key Benefits Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Key Benefits of Customer-Driven Innovation</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Fresh, Unfiltered Insights from Real Users</h5>
            <p class="card-text">Customers experience problems firsthand, offering perspectives internal teams may overlook. Helps identify new opportunities for features, services, and product improvements.</p>
            <p class="card-text"><strong>Example:</strong> LEGO’s LEGO Ideas platform allows fans to submit designs, and popular ideas get turned into real products.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Cost-Effective Crowdsourced Innovation</h5>
            <p class="card-text">Companies receive valuable insights without hiring expensive consultants. A simple "Submit Your Idea" option can generate breakthrough innovations while fostering engagement.</p>
            <p class="card-text"><strong>Example:</strong> Starbucks’ My Starbucks Idea led to mobile payments, free WiFi, and new drink flavors, all suggested by customers.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Builds Customer Loyalty & Engagement</h5>
            <p class="card-text">Customers feel valued when businesses listen and act on their input. A small incentive (discount, recognition, gift) strengthens brand advocacy.</p>
            <p class="card-text"><strong>Example:</strong> Tesla has no traditional marketing, yet its customer base is fiercely loyal because Elon Musk actively engages with user suggestions on X (Twitter).</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Solves Problems Before They Escalate</h5>
            <p class="card-text">Customers identify small inefficiencies before they become major issues. Businesses proactively resolve concerns, enhancing customer satisfaction.</p>
            <p class="card-text"><strong>Example:</strong> Amazon continuously improves delivery speed and Prime benefits based on user expectations and feedback.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Encourages a Culture of Open Innovation</h5>
            <p class="card-text">Companies that embrace external ideas grow faster than those relying solely on internal teams. Encourages an agile mindset, keeping businesses adaptive to market trends.</p>
            <p class="card-text"><strong>Example:</strong> Threadless, a custom T-shirt brand, lets users submit designs—winning designs get produced, and creators get paid, eliminating the risk of making unwanted products.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Outstanding Rewards for Exceptional Ideas</h5>
            <p class="card-text">When a customer’s idea is truly groundbreaking and valuable, companies should go beyond standard rewards. Exceptional contributors can receive:</p>
            <ul>
              <li>Cash prizes or company shares as recognition.</li>
              <li>Exclusive partnerships to develop the idea further.</li>
              <li>Job opportunities in the company to help implement their vision.</li>
            </ul>
            <p class="card-text"><strong>Example:</strong> Google and Apple have hired developers who built game-changing apps using their platforms. Similarly, Tesla fans contributing valuable ideas have been invited to join their teams.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Results from Companies That Implemented This Model</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Company</th>
          <th>Strategy Implemented</th>
          <th>Key Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LEGO</td>
          <td>LEGO Ideas Platform</td>
          <td>25+ user-generated sets launched, increased brand engagement</td>
        </tr>
        <tr>
          <td>Starbucks</td>
          <td>My Starbucks Idea</td>
          <td>Mobile payments & new products sourced from customer suggestions</td>
        </tr>
        <tr>
          <td>Tesla</td>
          <td>Direct engagement on X (Twitter)</td>
          <td>High customer loyalty, viral product improvements</td>
        </tr>
        <tr>
          <td>Amazon</td>
          <td>User-driven innovation</td>
          <td>Faster delivery services, personalized Prime benefits</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Implementation Framework Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Implementation Framework for Businesses</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <h3>Step 1: Create an Idea Submission Platform</h3>
        <ul>
          <li>Add a “Suggest Your Idea” button on the website/app.</li>
          <li>Enable easy submission with categories (e.g., product improvement, new service, customer experience).</li>
        </ul>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Step 2: Review & Shortlist Ideas</h3>
        <ul>
          <li>Internal teams evaluate suggestions based on feasibility, impact, and business goals.</li>
          <li>Prioritize ideas that align with customer pain points and strategic growth areas.</li>
        </ul>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Step 3: Reward & Recognize Contributors</h3>
        <ul>
          <li>Offer surprise gifts, discounts, or public recognition to encourage participation.</li>
          <li>Feature selected ideas in newsletters, blogs, or social media to showcase customer involvement.</li>
        </ul>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Step 4: Implement & Iterate</h3>
        <ul>
          <li>Roll out pilot programs based on high-potential ideas.</li>
          <li>Collect feedback from early adopters and refine the implementation.</li>
        </ul>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Step 5: Exceptional Rewards for Game-Changing Ideas</h3>
        <ul>
          <li>Identify high-impact suggestions that can reshape the business.</li>
          <li>Offer exclusive benefits such as stock options, revenue-sharing models, or job opportunities.</li>
        </ul>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Step 6: Create a Continuous Loop of Innovation</h3>
        <ul>
          <li>Promote successful customer-driven ideas to inspire more participation.</li>
          <li>Build a community-driven innovation culture with regular engagement.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Conclusion Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4">Conclusion: The Future of Customer-Driven Innovation</h2>
    <p class="text-center">
      "The best business ideas don’t always come from boardrooms. Sometimes, they come from a passionate customer who simply wants to make your product better."
    </p>
    <p class="text-center">
      By enabling a structured idea submission model, businesses can tap into a goldmine of customer insights, enhance engagement, and create products that people truly want—all while minimizing costs and risks.
    </p>
    <p class="text-center">
      The future of innovation is not just about creating for customers—but innovating with them.
    </p>
  </section>
                `;
                break;
            default:
                content = `<p>No content available for this project.</p>`;
        }

        projectDetailsContent.innerHTML = content;

        // Push new state into history
        history.pushState({ projectId }, '', `#${projectId}`);
    }

    // Function to hide project details and show all other sections
    function hideProjectDetails() {
        // Hide the project details section
        projectDetailsSection.classList.add('hidden');

        // Show all other sections
        showAllSections();

        // Restore the previous state by removing hash
        history.pushState(null, '', window.location.pathname);
    }

    // Event listener for Learn More buttons
    document.querySelectorAll('.btn-outline-light').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const projectId = this.closest('.card').getAttribute('onclick').match(/'([^']+)'/)[1];
            showProjectDetails(projectId);
        });
    });

    // Handle back/forward browser navigation
    window.addEventListener('popstate', function (event) {
        if (event.state && event.state.projectId) {
            showProjectDetails(event.state.projectId);
        } else {
            hideProjectDetails();
        }
    });

    // Load project details if a hash is present in the URL when the page loads
    if (window.location.hash) {
        const projectId = window.location.hash.substring(1);
        showProjectDetails(projectId);
    } else {
        // Ensure all sections are visible when no hash is present
        showAllSections();
    }
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate sending the message (no backend)
    console.log('Message Details:', { name, email, subject, message });

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('d-none');

    // Clear the form
    document.getElementById('contactForm').reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.add('d-none');
    }, 5000);
});