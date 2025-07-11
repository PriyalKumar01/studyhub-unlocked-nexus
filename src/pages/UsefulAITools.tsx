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
      color: 'bg-cyan-500',
      tools: [
        { title: 'Notion AI', url: 'https://www.notion.so/product/ai', description: 'Productivity booster inside Notion.', access: 'Free + Paid' },
        { title: 'Owlift', url: 'https://owlift.io', description: 'Explains complex topics in simple words.', access: 'Free' },
        { title: 'Illuminate by Google', url: 'https://illuminate.withgoogle.com', description: 'Turns papers into podcasts.', access: 'Free' },
        { title: 'Mindmap.ai', url: 'https://mindmap.ai', description: 'Turn ideas into visual mind maps.', access: 'Free' },
        { title: 'Learn About by Google', url: 'https://learnabout.withgoogle.com', description: 'PDF Q&A with level-based explanations.', access: 'Free' },
        { title: 'AI Dictionary by Sider', url: 'https://sider.ai/tools/dictionary', description: 'Multilingual dictionary with examples.', access: 'Free' },
        { title: 'Glitter AI', url: 'https://glitterai.app', description: 'Turn steps into tutorials from voice/text.', access: 'Free + Paid' },
        { title: 'Write For Me GPT', url: 'https://writeforme.io', description: 'Generate scripts, vlogs & essays using AI.', access: 'Free-Trial'},
       { title: 'Consensus', url: 'https://consensus.app', description: 'Research paper-based answers powered by AI.', access: 'Free' },
        { title: 'Scispace', url: 'https://scispace.com', description: 'AI reader for scientific PDFs with explanations.', access: 'Free' },
        { title: 'ScholarGPT', url: 'https://scholargpt.net', description: 'Academic search with ChatGPT interface.', access: 'Free' },
        { title: 'Perplexity AI', url: 'https://www.perplexity.ai', description: 'Ask anything and get web-linked answers.', access: 'Free' }
      ]
    }, 
    {
      id: 'presentationTools',
      name: 'Presentation & Media AI Tools',
      icon: '📊',
      color: 'bg-yellow-600',
      tools: [
        { title: 'Gamma App', url: 'https://gamma.app', description: 'Auto-generate PPTs from ideas.', access: 'Freemium' },
        { title: 'Jasper', url: 'https://jasper.ai', description: 'Create high-quality branded content.', access: 'Paid' },
        { title: 'Pitch', url: 'https://pitch.com', description: 'Modern presentation builder for teams.', access: 'Free + Paid' },
        { title: 'Runway', url: 'https://runwayml.com', description: 'AI video editing and generation.', access: 'Freemium' },
        { title: 'Pika Labs', url: 'https://pika.art', description: 'Text to video animations and scenes.', access: 'Free' },
        { title: 'InVideo', url: 'https://invideo.io', description: 'Create engaging videos with AI templates.', access: 'Freemium' },
        { title: 'Paper Animator AI', url: 'https://paperanimator.com/', description: 'Transform hand-drawn sketches into animated sequences using AI.', access: 'Free'}
      ]
    },
{
      id: 'linkedinTools',
      name: 'LinkedIn & Career Boosters',
      icon: '💼',
      color: 'bg-blue-500',
      tools: [
        {
          title: 'Rocket Reach',
          url: 'https://rocketreach.co',
          description: 'Find email, phone & LinkedIn profiles for professionals.',
          access: 'Freemium'
        },
        {
          title: 'Intouch Tool',
          url: 'https://intouchtool.com',
          description: 'Automated LinkedIn outreach & connection tool.',
          access: 'Paid'
        },
        {
          title: 'Careerflow AI',
          url: 'https://careerflow.ai',
          description: 'Optimize LinkedIn profile and job tracking.',
          access: 'Freemium'
        },
        {
          title: 'Taplio X',
          url: 'https://taplio.com',
          description: 'Grow LinkedIn audience with daily post suggestions & analytics.',
          access: 'Paid'
        }
      ]
    },
    {
    id: 'aiagents',
    name: 'AI Agents & Automation',
    icon: '🧠',
    color: 'bg-purple-600',
    tools: [
      {
        title: 'AutoGPT',
        url: 'https://github.com/Torantulino/Auto-GPT',
        type: 'Free',
        description: 'Open-source AI agent that performs tasks autonomously.' , access: 'Free'
      },
      {
        title: 'Jarvis (Microsoft)',
        url: 'https://www.microsoft.com/en-us/ai',
        type: 'Free',
        description: 'Microsoft’s personal assistant powered by AI agents.', access: 'Free'
      },
      {
        title: 'Replit Agent',
        url: 'https://replit.com',
        type: 'Free-Trial',
        description: 'AI assistant that builds apps from natural language.', access: 'Free trial'
      },
      {
        title: 'Do Browser',
        url: 'https://dobrowser.com',
        type: 'Paid',
        description: 'Automate tasks in Chrome using voice or text commands.' , access: 'Paid'
      },
      {
        title: 'Deep Research (OpenAI)',
        url: 'https://openai.com/deep-research',
        type: 'Paid',
        description: 'Get deeply researched AI answers with web synthesis.' , access: 'Paid'
      },
      {
    title: "Synthflow AI",
    description: "AI voice assistant with human voice to automate your sales or appointment calls 24/7.",
    url: "https://synthflow.ai",
    access: "Free-Trial", type: 'Free-Trial',
  },
  {
    title: "Fini AI",
    description: "Turn your docs into a conversational AI assistant to resolve 70% of customer questions instantly.",
    url: "https://fini.so",
    access: "Free",
    type: 'Free',
  },
  {
    title: "SWE-agent",
    description: "Fix bugs in your GitHub repo using GPT-4 with automated PRs.",
    url: "https://github.com/Autonomous-AI/SWE-agent",
    access: "Free",
    type: 'Free',
  },
  {
    title: "GoalGPT",
    description: "Autonomous OpenAI-powered agent that completes tasks with minimal input.",
    url: "https://github.com/goalgpt/GoalGPT",
    access: "Free",
    type: 'Free',
  },
  {
    title: "AgentLLM",
    description: "Open-source autonomous agent framework compatible with LLaMA models.",
    url: "https://github.com/josh-xt/Agent-LLM",
    access: "Free",
    type: 'Free',
  },
  {
    title: "OpenAGI",
    description: "Experimental multimodal agent that can manipulate images autonomously.",
    url: "https://github.com/opentibi/OpenAGI",
    access: "Free",
    type: 'Free',
  },
  {
    title: "DreamGPT",
    description: "Generates innovative ideas from hallucinations using GPT-style architecture.",
    url: "https://github.com/smangrul/DreamGPT",
    access: "Free",
    type: 'Free',
  },
  {
    title: "ChatArena",
    description: "Simulates social interactions between AI agents via language games.",
    url: "https://github.com/facebookresearch/ChatArena",
    access: "Free",
    type: 'Free',
  },
  {
    title: "LoopGPT",
    description: "Multi-tasking autonomous agent that can be paused and redirected mid-task.",
    url: "https://github.com/melih-unsal/loopgpt",
    access: "Freemium",
    type: 'Freemium',
  },
  {
    title: "Soul Machines AI Agents",
    description: "Create emotionally intelligent AI agents for businesses and HR.",
    url: "https://www.soulmachines.com/",
    access: "Free-Trial",
    type: 'Free',
  },
    ]
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
        { title: 'Fal AI', url: 'https://fal.ai', description: 'Deploy CV/NLP AI in apps fast.', access: 'Free' },
      { title: 'Microsoft Designer', url: 'https://designer.microsoft.com', description: 'Design social posts & visuals with AI.', access: 'Free' },
        { title: 'Copy AI', url: 'https://copy.ai', description: 'Generate ad copy, captions & content.', access: 'Free + Paid' },
        { title: 'Pixlr', url: 'https://pixlr.com', description: 'Free online photo editor with AI tools.', access: 'Freemium' },
        { title: 'Photopea', url: 'https://photopea.com', description: 'Free Photoshop alternative in browser.', access: 'Free' },
        { title: '10Web', url: 'https://10web.io', description: 'Build full WordPress sites using AI.', access: 'Freemium' },
        { title: 'Screenshot to Code', url: 'https://screenshottocode.com/', description: 'Convert screenshots to HTML code.', access: 'Free' },
        { title: 'Replit', url: 'https://replit.com', description: 'AI IDE with Ghostwriter for fast dev work.', access: 'Free + Paid' },
        { title: 'CodeJS', url: 'https://www.yeschat.ai/', description: 'AI coding assistant in the browser.', access: 'Free' },
        { title: 'Blackbox AI', url: 'https://www.blackbox.ai/', description: 'Autocompletes code and explains it in seconds.', access: 'Freemium'},
        { title: 'HTTPie AI',url: 'https://httpie.io',description: 'Gather APIs and integrate them easily with a modern interface.', access: 'Free' },
        {title: 'RTutor', url: 'https://rtutor.ai', description: 'Generate and test R code with GPT-powered assistant.',access: 'Free' },
        { title: 'Fast AI', url: 'https://www.fast.ai',description: 'Learn AI fundamentals and advanced topics.',access: 'Free'},
        { title: 'Teachable Machine', url: 'https://teachablemachine.withgoogle.com', description: 'Design and train ML models with zero code.', access: 'Free'},
        {title: 'Cursor AI', url: 'https://cursor.so',description: 'Your AI coding assistant for faster development.',access: 'Free'},
        {title: 'OWL by Camel AI',url: 'https://www.camel-ai.com/owl', description: 'Multi-agent AI framework to automate complex tasks.',access: 'Free'},
        { title: 'Cline', url: 'https://cline.ai', description: 'Real-time AI pair programming environment.',access: 'Free'},
        { title: 'Kaggle', url: 'https://www.kaggle.com', description: 'AI/ML competitions, datasets, code and community.', access: 'Freemium' },
        { title: 'Cades', url: 'https://www.cades.ai', description: 'Turn app ideas into real screens, code, and publish-ready UI.',access: 'Free'},
        { title: 'Create AI', url: 'https://create.ai', description: 'Free AI app builder using GPT-4 with templates.',access: 'Free'},
        {title: 'DeepSeek-V3', url: 'https://deepseek.com',description: 'Open-source LLM model for text and code generation.',access: 'Free'},
        {title: 'Google AI Edge',url: 'https://ai.google/discover/edge',description: 'Deploy AI models to edge devices securely and offline.', access: 'Free'},
        { title: 'Lovable AI', url: 'https://lovable.dev/', description: 'AI tools platform for students and devs with multiple utilities.', access: 'Free' },
        { title: 'Volt',url: 'https://bolt.new/',description: 'Build AI-powered workflows and actions visually.',  access: 'Free-Trial'},
        { title: 'Clerk.dev',url: 'https://clerk.dev',description: 'Authentication & user management for React apps.', access: 'Freemium' },
        { title: 'Supabase',url: 'https://supabase.com',description: 'Open-source Firebase alternative with built-in auth, DB, and edge functions.', access: 'Free + Paid'}  
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
    { title: 'Undetectable AI', url: 'https://undetectable.ai/', type: 'Freemium',
      description: 'Make AI-generated text human-like. Ideal for students, SEO writers, etc.', access: 'Free'
    },
    {
      title: 'GPTZero',
      url: 'https://gptzero.me/',
      type: 'Free',
      description: 'Detect if your text is AI-written. Fast and reliable plagiarism checker.',access: 'Free'
    },
    {
      title: 'QuillBot Humanizer',
      url: 'https://quillbot.com/humanizer',
      type: 'Free',
      description: 'Refine text to bypass AI detectors with natural phrasing.' , access: 'Free'
    },
    {
      title: 'Humanizer AI Tools',
      url: 'https://www.humanizeraitools.com/',
      type: 'Free',
      description: 'Paste any text and instantly convert it to sound like a human wrote it.' , access: 'Free'
    }
  ] 
},
{
  id: '3dAITools',
  name: '3D AI & Creative Tools',
  icon: '🧊',
  color: 'bg-blue-600',
  tools: [
  {
    title: "Leonardo AI",
    description: "Design platform for generating 3D assets, textures, and illustrations for games, fashion, etc.",
    url: "https://leonardo.ai",
    type: "Freemium"
  },
  {
    title: "Genie by Lumalabs",
    description: "3D model builder with animations, particles, and Discord integration.",
    url: "https://lumalabs.ai/genie",
    type: "Free"
  },
  {
    title: "Kinetix",
    description: "Create 3D animations with no technical experience required.",
    url: "https://www.kinetix.tech",
    type: "Paid"
  },
  {
    title: "Tripo AI",
    description: "Generate high-quality 3D models from text prompts. Includes API.",
    url: "https://www.tripo.ai",
    type: "Free"
  },
  {
    title: "DreamFusion 3D",
    description: "Text-to-3D object generator project from Google researchers.",
    url: "https://github.com/ashawkey/dreamfusion",
    type: "Free"
  },
  {
    title: "Get3D Nvidia",
    description: "Realistic 3D model generator by Nvidia Labs.",
    url: "https://nvlabs.github.io/GET3D/",
    type: "Free"
  },
  {
    title: "Hunyuan3D",
    description: "Generate 3D characters with animation from text descriptions.",
    url: "https://hunyuan3d.tencent.com/",
    type: "Free"
  },
  {
    title: "Krikey AI",
    description: "3D avatar and scene creation with auto-animation.",
    url: "https://www.krikey.ai",
    type: "Freemium"
  },
  {
    title: "Edify 3D",
    description: "NVIDIA-backed ultra-realistic 3D asset generator with 4K textures.",
    url: "https://www.edify.ai",
    type: "Free"
  },
  {
    title: "DeepMotion",
    description: "Convert videos into animated 3D characters in real-time.",
    url: "https://www.deepmotion.com/",
    type: "Freemium"
  },
  {
    title: "DimensionX",
    description: "Transform images into 3D/4D interactive environments with camera control.",
    url: "https://dimensionx.ai",
    type: "Free"
  },
  {
    title: "3D LHM (Alibaba)",
    description: "Instant image-to-animated-3D converter by Alibaba for VR & games.",
    url: "https://open.alizila.com/3d-lhm",
    type: "Free"
  }
]
},{
  id: 'facedetection',
  name: 'Face & Image Search Tools',
  icon: '🖼️',
  color: 'bg-cyan-600',
  tools: [
    {
      title: 'FaceCheck ID',
      url: 'https://facecheck.id/',
      type: 'Freemium',
      description: 'Find people online using their face image. Reverse face search.', access: 'Free + Paid'
    },
    {
      title: 'DeepFake Detector',
      url: 'https://deepware.ai/deepfake-detector/',
      type: 'Free',
      description: 'Detect fake or AI-edited images in seconds.', access: 'Free'
    },
    {
      title: 'PimEyes',
      url: 'https://pimeyes.com/',
      type: 'Freemium',
      description: 'Upload a photo and find where it appears on the internet.' , access: 'Free + Paid'
    },
    {
      title: 'Lenso.ai',
      url: 'https://lenso.ai/',
      type: 'Freemium',
      description: 'AI-powered reverse image search engine with face recognition.', access: 'Free+ Paid'
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