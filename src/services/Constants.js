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