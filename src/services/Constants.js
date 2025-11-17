import SiteLogo from "../assets/images/SiteLogo.png";
import slideImage1 from "../assets/images/slideImage1.jpeg";
import slideImage2 from "../assets/images/slideImage2.webp";
import slideImage3 from "../assets/images/slideImage3.jpg";

export const IMAGES = {
  SiteLogo,
  slideImage1,
  slideImage2,
  slideImage3,
};

export const landingHeroSlides = [
  IMAGES.slideImage1,
  IMAGES.slideImage2,
  IMAGES.slideImage3,
];

export const templates = {
  language: ["React.js", "Angular.js", "HTML"],
  style: ["CSS", "Tailwind CSS", "Bootstrap"],
  script: ["Js"],
};

export const AiPrompt = (description, framework, style, script) => {
  return `
You are an expert senior UI engineer specializing in modern, animated, and fully responsive web components.  
You have advanced knowledge of: HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js, Next.js, Vue.js, Angular, and UI/UX best practices.

Your task:
Generate a production-ready UI component based on the following details:

Component Description: ${description}
Framework to Use: ${framework}
Style Technology: ${style}
${framework === "HTML" ? `Script to Use: ${script}` : ""}
${framework === "HTML" ? `Output Format: Single ${framework} file` : ""}

Strict Requirements:
1. **Return only valid code** in properly fenced markdown blocks.  
   - No explanations  
   - No comments  
   - No extra text  
2. The entire output must be **one single file** written in the chosen framework.  
3. Code must be:  
   - Clean, modern, and well-structured  
   - Fully responsive  
   - SEO-optimized where applicable  
   - Include smooth animations, hover effects, shadows, modern typography, and color usage  
4. Follow best UI/UX practices for usability and accessibility.  
5. Ensure the component looks professional, visually appealing, and production-ready.

Return ONLY the final code block, nothing else.
`;
};

export const reviewPrompt = (code) => {
  return `
You are an expert senior UI engineer specializing in modern, responsive, and production-ready web components.  

Your task:
Review the following code carefully and provide actionable feedback to improve quality, maintainability, performance, and adherence to best UI/UX practices.

Code to Review:
${code}

Strict Requirements:
1. Identify any issues or mistakes in the code.
2. Suggest improvements and optimizations.
3. Check for:
   - Clean, readable, and maintainable code
   - Proper structure and formatting
   - Responsive and accessible design
   - Modern UI/UX best practices
4. **Do not rewrite the code unless necessary to show a fix.**
5. Return the review in a structured format:
   - **Issues Found:** List all problems
   - **Suggestions:** Specific improvements
   - **Summary:** Overall quality evaluation
6. **Return ONLY the structured review, nothing else.**
`;
};