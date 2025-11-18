import SiteLogo from "../assets/images/SiteLogo.png";
import slideImage1 from "../assets/images/slideImage1.jpeg";
import slideImage2 from "../assets/images/slideImage2.webp";
import slideImage3 from "../assets/images/slideImage3.jpg";
import GenPlaceHolder from "../assets/images/GenratePlaceHolder.jpg";

export const IMAGES = {
  SiteLogo,
  slideImage1,
  slideImage2,
  slideImage3,
  GenPlaceHolder,
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

// export const AiPrompt = (description, framework, style, script) => {
//   return `
// You are an expert senior UI engineer specializing in modern, animated, and fully responsive web components.  
// You have advanced knowledge of: HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js, Next.js, Vue.js, Angular, and UI/UX best practices.

// Your task:
// Generate a production-ready UI component based on the following details:

// Component Description: ${description}
// Framework to Use: ${framework}
// Style Technology: ${style}
// ${framework === "HTML" ? `Script to Use: ${script}` : ""}
// ${framework === "HTML" ? `Output Format: Single ${framework} file` : ""}

// Strict Requirements:
// 1. **Return only valid code** in properly fenced markdown blocks.  
//    - No explanations  
//    - No comments  
//    - No extra text  
// 2. The entire output must be **one single file** written in the chosen framework.  
// 3. Code must be:  
//    - Clean, modern, and well-structured  
//    - Fully responsive  
//    - SEO-optimized where applicable  
//    - Include smooth animations, hover effects, shadows, modern typography, and color usage  
// 4. Follow best UI/UX practices for usability and accessibility.  
// 5. Ensure the component looks professional, visually appealing, and production-ready.

// Return ONLY the final code block, nothing else.
// `;
// };

export const AiPrompt = (description, framework, style, script) => {
  const inlineCSSRule =
    framework !== "HTML" && style === "CSS"
      ? `
IMPORTANT RULE:
Since the selected style is CSS but the framework is NOT HTML:
- DO NOT create or use any external CSS files
- DO NOT use class names or class-based styling
- APPLY ALL STYLES INLINE directly on components (e.g., style={{ ... }} in React)
- All styles must be embedded directly inside the component elements.
`
      : "";

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

${inlineCSSRule}

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

export const ImagePromptGenerator = (baseIdea) => {
  return `
You are an expert AI prompt engineer specialized in generating high-quality, detailed, and creative prompts for AI image generation.  

User Base Idea: "${baseIdea}"

Your task:
Generate a minimum of 3 unique, detailed, and creative prompts for AI image generation based on the user idea.  
Each prompt should include:
- Artistic style (realistic, cinematic, digital art, watercolor, etc.)
- Mood or atmosphere (sunset, futuristic, dramatic, serene, etc.)
- Composition details (close-up, wide shot, aerial view, perspective, etc.)
- Colors, lighting, and special effects
- Any creative elements that enhance visual appeal

Requirements:
1. Provide **at least 5 prompts**, each on a new line.
2. Do not repeat ideas; each prompt must be unique.
3. Return ONLY the list of prompts, without explanations or extra text.

Example output for base idea "sunrise":
1. "A stunning sunrise over misty mountains, golden light reflecting on the river, realistic style, cinematic composition"
2. "Digital art of a sunrise at the beach, soft pastel colors, gentle waves, peaceful atmosphere"
3. "Futuristic city skyline at sunrise, glowing neon lights, aerial perspective, dramatic clouds"
4. "Watercolor painting of a sunrise in a forest, sun rays filtering through trees, soft warm colors"
5. "Sunrise over a desert landscape, sand dunes illuminated by warm light, cinematic wide shot"

Generate similar high-quality prompts for the user idea: "${baseIdea}".
`;
};