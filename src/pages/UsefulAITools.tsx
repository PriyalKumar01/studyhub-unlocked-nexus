import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';

const UsefulAITools = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const tools = [
    {
      id: 'education',
      name: 'Education / Study Tools',
      icon: '🧠',
      color: 'bg-blue-500',
      tools: [
        { title: 'Notion AI', url: 'https://www.notion.so/product/ai', description: 'Productivity booster inside Notion.', access: 'Free + Paid' },
        { title: 'Owlift', url: 'https://owlift.io', description: 'Explains complex topics in simple words.', access: 'Free' },
        { title: 'Illuminate by Google', url: 'https://illuminate.withgoogle.com', description: 'Turns papers into podcasts.', access: 'Free' },
        { title: 'Mindmap.ai', url: 'https://mindmap.ai', description: 'Turn ideas into visual mind maps.', access: 'Free' },
        { title: 'Learn About by Google', url: 'https://learnabout.withgoogle.com', description: 'PDF Q&A with level-based explanations.', access: 'Free' },
        { title: 'AI Dictionary by Sider', url: 'https://sider.ai/tools/dictionary', description: 'Multilingual dictionary with examples.', access: 'Free' },
        { title: 'Glitter AI', url: 'https://glitterai.app', description: 'Turn steps into tutorials from voice/text.', access: 'Free + Paid' },
      ]
    }, {
  title: "Synthflow AI",
  description: "AI voice assistant with human-like voice for automating calls — ideal for 24/7 appointment scheduling and sales.",
  link: "https://synthflow.ai",
  access: "Free-Trial",
  category: "AI Agents"
},
{
  title: "Fini AI",
  description: "Instantly turn your help center or knowledge base into a 24/7 conversational AI agent to handle customer queries.",
  link: "https://fini.ai",
  access: "Free",
  category: "AI Agents"
},
{
  title: "LoopGPT",
  description: "An autonomous multi-task AI agent that can be redirected mid-task and paused anytime.",
  link: "https://loopgpt.ai",
  access: "Freemium",
  category: "AI Agents"
},
{
  title: "AgentLLM",
  description: "An open-source autonomous agent compatible with LLAMA models. Fully customizable.",
  link: "https://github.com/joshxh/AgentLLM",
  access: "Free",
  category: "AI Agents"
},
{
  title: "GoalGPT",
  description: "Autonomous AI powered by OpenAI API. Performs tasks independently using goal-based logic.",
  link: "https://goalgpt.ai",
  access: "Freemium",
  category: "AI Agents"
},
{
  title: "SWE-agent",
  description: "Automates bug fixing in your GitHub repos using GPT-4. Built for code-AI collaboration.",
  link: "https://github.com/lozan0/SWE-agent",
  access: "Free",
  category: "AI Agents"
},
{
  title: "WestWorld Simulation",
  description: "Simulation with social behavior between AIs, built for research into autonomous agents.",
  link: "https://westworld.ai",
  access: "Free",
  category: "AI Agents"
},
{
  title: "OpenAGI",
  description: "Experimental autonomous AI that manipulates images using multimodal processing.",
  link: "https://github.com/AI-Project/OpenAGI",
  access: "Free",
  category: "AI Agents"
},
{
  title: "DreamGPT",
  description: "Creative hallucination-based idea generator. Uses AI to spark innovative concepts.",
  link: "https://github.com/samwit/DreamGPT",
  access: "Free",
  category: "AI Agents"
},
{
  title: "ChatArena",
  description: "Study AI social interaction through linguistic games. Ideal for research and experimentation.",
  link: "https://github.com/facebookresearch/ChatArena",
  access: "Free",
  category: "AI Agents"
},{
  title: "Leonardo AI",
  description: "Design platform for 3D assets, textures, game characters, fashion and architecture — with AI Canvas.",
  link: "https://leonardo.ai",
  access: "Freemium",
  category: "3D Modeling"
},
{
  title: "Genie by Lumalabs",
  description: "Collaborative 3D model generator with animation support and sharing features.",
  link: "https://lumalabs.ai/genie",
  access: "Free",
  category: "3D Modeling"
},
{
  title: "Kinetix",
  description: "Create 3D animations with no prior experience using a simple AI interface.",
  link: "https://www.kinetix.tech",
  access: "Paid",
  category: "3D Modeling"
},
{
  title: "Tripo AI",
  description: "Generate high-quality 3D models from prompts with advanced APIs.",
  link: "https://tripo.ai",
  access: "Paid",
  category: "3D Modeling"
},
{
  title: "DreamFusion 3D",
  description: "Text-to-3D object generation using DreamFusion. Hosted on GitHub.",
  link: "https://github.com/google-research/dreamfusion",
  access: "Free",
  category: "3D Modeling"
},
{
  title: "Get3D by NVIDIA",
  description: "Generate realistic 3D models — developed by NVIDIA research.",
  link: "https://developer.nvidia.com/blog/nvidia-get3d-generative-models/",
  access: "Free",
  category: "3D Modeling"
},
{
  title: "Edify 3D",
  description: "AI platform by NVIDIA for ultra-realistic 3D models with PBR and 4K textures.",
  link: "https://www.nvidia.com/en-us/research/edify-3d/",
  access: "Free",
  category: "3D Modeling"
},
{
  title: "Hunyuan3D",
  description: "Create animated 3D characters and scenes based on text descriptions.",
  link: "https://hunyuan.tencent.com/hunyuan3d",
  access: "Free",
  category: "3D Modeling"
},
{
  title: "Krikey AI",
  description: "Generate 3D avatars with access to a public gallery.",
  link: "https://www.krikey.ai",
  access: "Freemium",
  category: "3D Modeling"
},
{
  title: "DimensionX",
  description: "Convert your images into 3D/4D scenes with photorealistic rendering.",
  link: "https://dimensionx.ai",
  access: "Free",
  category: "3D Modeling"
},
{
  title: "3D LHM (Alibaba)",
  description: "Convert any 2D image into animated 3D render in one second.",
  link: "https://damo.alibaba.com/labs/3d-lhm",
  access: "Free",
  category: "3D Modeling"
},
    {
      id: 'text-to-speech',
      name: 'Text-To-Speech / Audio Tools',
      icon: '🗣️',
      color: 'bg-green-500',
      tools: [
        { title: 'PDF2Audio', url: 'https://pdf2audio.com', description: 'Convert PDFs to audio instantly.', access: 'Free' },
        { title: 'ElevenLabs Studio', url: 'https://elevenlabs.io/studio', description: 'Generate realistic AI voices.', access: 'Free + Paid' },
        { title: 'ElevenLabs Projects', url: 'https://elevenlabs.io/projects', description: 'Create full podcast/audio from text.', access: 'Free + Paid' }
      ]
    },
    {
      id: 'productivity',
      name: 'Productivity & Automation',
      icon: '📊',
      color: 'bg-purple-600',
      tools: [
        { title: 'Zapier', url: 'https://zapier.com', description: 'Automate apps and workflows.', access: 'Free + Paid' },
        { title: 'AppSumo', url: 'https://appsumo.com', description: 'Discounted tools for productivity.', access: 'Free' },
        { title: 'Fiverr AI Services', url: 'https://www.fiverr.com/categories/programming-tech/ai-services', description: 'Hire AI experts for fast tasks.', access: 'Paid' }
      ]
    },
    {
      id: 'llm',
      name: 'AI Chatbots & Model Comparison',
      icon: '🤖',
      color: 'bg-indigo-500',
      tools: [
        { title: 'AnyChat', url: 'https://anychat.one', description: 'Compare ChatGPT, Claude, Gemini etc.', access: 'Free' },
        { title: 'ChatALL', url: 'https://chatall.io', description: 'Query multiple AIs together.', access: 'Free' },
        { title: 'Perplexity Labs', url: 'https://labs.perplexity.ai', description: 'Try Mixtral, Llama etc. for free.', access: 'Free' },
        { title: 'Ollama', url: 'https://ollama.com', description: 'Run LLMs like LLaMA locally.', access: 'Free' }
      ]
    },
    {
      id: 'image',
      name: 'Image & Design Tools',
      icon: '🖼️',
      color: 'bg-pink-600',
      tools: [
        { title: 'Upscale.media', url: 'https://upscale.media', description: 'Enhance image resolution.', access: 'Free' },
        { title: 'AI Images Database', url: 'https://aiimagesdatabase.com', description: 'Search free AI-generated images.', access: 'Free' },
        { title: 'Image to Prompt', url: 'https://imagetoprompt.com', description: 'Convert image to prompt.', access: 'Free' }
      ]
    },
    {
      id: 'dev',
      name: 'Developer / Utility Tools',
      icon: '🛠️',
      color: 'bg-orange-500',
      tools: [
        { title: 'Pinokio', url: 'https://pinokio.computer', description: '1-click AI setup like SD, LLaMA.', access: 'Free' },
        { title: 'Fal AI', url: 'https://fal.ai', description: 'Deploy CV/NLP AI in apps fast.', access: 'Free' }
      ]
    },
    {
      id: 'writing',
      name: 'Writing & Translation',
      icon: '✍️',
      color: 'bg-yellow-500',
      tools: [
        { title: 'Deepl', url: 'https://deepl.com', description: 'Translate accurately in many languages.', access: 'Free + Paid' },
        { title: 'Machine Translation AI', url: 'https://machinetranslation.ai', description: 'Use multiple translators together.', access: 'Free' },
        { title: 'Deepl Write', url: 'https://www.deepl.com/write', description: 'Fix grammar & rephrase better.', access: 'Free' },
        { title: 'AI Social Bio', url: 'https://aisocialbio.com', description: 'Make Insta/Twitter bios instantly.', access: 'Free' }
      ]
    },
    {
  id: 'aidetection',
  name: 'AI Detection & Humanizer',
  icon: '🛡️',
  color: 'bg-red-500',
  tools: [
    {
      title: 'Undetectable AI',
      url: 'https://undetectable.ai/',
      type: 'Freemium',
      description: 'Make AI-generated text human-like. Ideal for students, SEO writers, etc.'
    },
    {
      title: 'GPTZero',
      url: 'https://gptzero.me/',
      type: 'Free',
      description: 'Detect if your text is AI-written. Fast and reliable plagiarism checker.'
    },
    {
      title: 'QuillBot Humanizer',
      url: 'https://quillbot.com/humanizer',
      type: 'Free',
      description: 'Refine text to bypass AI detectors with natural phrasing.'
    },
    {
      title: 'Humanizer AI Tools',
      url: 'https://www.humanizeraitools.com/',
      type: 'Free',
      description: 'Paste any text and instantly convert it to sound like a human wrote it.'
    }
  ]
},{
  id: 'aiagents',
  name: 'AI Agents & Automation',
  icon: '🧠',
  color: 'bg-purple-600',
  tools: [
    {
      title: 'AutoGPT',
      url: 'https://github.com/Torantulino/Auto-GPT',
      type: 'Free',
      description: 'Open-source AI agent that performs tasks autonomously.'
    },
    {
      title: 'Jarvis (Microsoft)',
      url: 'https://www.microsoft.com/en-us/ai',
      type: 'Free',
      description: 'Microsoft’s personal assistant powered by AI agents.'
    },
    {
      title: 'Replit Agent',
      url: 'https://replit.com',
      type: 'Free-Trial',
      description: 'AI assistant that builds apps from natural language.'
    },
    {
      title: 'Do Browser',
      url: 'https://dobrowser.com',
      type: 'Paid',
      description: 'Automate tasks in Chrome using voice or text commands.'
    },
    {
      title: 'Deep Research (OpenAI)',
      url: 'https://openai.com/deep-research',
      type: 'Paid',
      description: 'Get deeply researched AI answers with web synthesis.'
    }
  ]
},{
  id: 'facedetection',
  name: 'Face & Image Search Tools',
  icon: '🖼️',
  color: 'bg-green-600',
  tools: [
    {
      title: 'FaceCheck ID',
      url: 'https://facecheck.id/',
      type: 'Freemium',
      description: 'Find people online using their face image. Reverse face search.'
    },
    {
      title: 'DeepFake Detector',
      url: 'https://deepware.ai/deepfake-detector/',
      type: 'Free',
      description: 'Detect fake or AI-edited images in seconds.'
    },
    {
      title: 'PimEyes',
      url: 'https://pimeyes.com/',
      type: 'Freemium',
      description: 'Upload a photo and find where it appears on the internet.'
    },
    {
      title: 'Lenso.ai',
      url: 'https://lenso.ai/',
      type: 'Freemium',
      description: 'AI-powered reverse image search engine with face recognition.'
    }
  ]
},
    {
      id: 'life',
      name: 'Life Assistant Tools',
      icon: '🛍️',
      color: 'bg-teal-500',
      tools: [
        { title: 'Shop.app', url: 'https://shop.app', description: 'Track orders & rewards.', access: 'Free' },
        { title: 'Amazon AI Shopping Guides', url: 'https://www.amazon.com/shopping-guides', description: 'Personalized shopping with AI.', access: 'Free' },
        { title: 'The StoryGraph', url: 'https://app.thestorygraph.com', description: 'Track & discover books by mood.', access: 'Free' }
      ]
    }
  ];

  const handleVisit = (url: string) => {
    window.open(url, '_blank');
  };

  if (selectedCategory) {
    const category = tools.find(t => t.id === selectedCategory);
    if (!category) return null;

    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Button onClick={() => setSelectedCategory(null)} variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{category.name}</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Explore handpicked tools in {category.name}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="feature-card relative h-full hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary">{tool.access}</Badge>
                  </div>
                  <CardHeader>
                    <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center text-white text-lg`}>
                      <Rocket className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg leading-tight mt-2">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full btn-hero" onClick={() => handleVisit(tool.url)}>
                      Visit Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Useful AI Tools 💡
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Priyal has curated this powerful list of AI tools to help students like you study smarter, code faster, create better and save time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className="feature-card h-full cursor-pointer hover:border-primary/30 hover:shadow-xl"
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg text-center">{category.name}</CardTitle>
                  <CardDescription className="text-center">
                    {category.tools.length} tools available
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Badge variant="secondary">{category.tools.length} Tools</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulAITools;