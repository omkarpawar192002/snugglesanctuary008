import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Heart, Calendar, AlertTriangle, Share2 } from "lucide-react";

import snakeRescueBasics from "@/assets/blogs/snake-rescue-basics.jpg";
import venomousSnakesIndia from "@/assets/blogs/venomous-snakes-india.jpg";
import snakeEncounter from "@/assets/blogs/snake-encounter.jpg";
import snakebiteFirstAid from "@/assets/blogs/snakebite-first-aid.jpg";
import nonVenomousSnakes from "@/assets/blogs/non-venomous-snakes.jpg";
import monsoonSnakes from "@/assets/blogs/monsoon-snakes.jpg";
import snakeRelease from "@/assets/blogs/snake-release.jpg";
import snakePrevention from "@/assets/blogs/snake-prevention.jpg";
import snakeConservation from "@/assets/blogs/snake-conservation.jpg";

const blogData: Record<string, {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  likes: number;
  content: string[];
}> = {
  "1": {
    title: "How to Identify Venomous Snakes in Maharashtra",
    category: "Snake Safety",
    author: "Dr. Rajesh Gokhale",
    date: "Dec 24, 2025",
    readTime: "8 min read",
    image: venomousSnakesIndia,
    likes: 456,
    content: [
      "Maharashtra is home to the 'Big Four' venomous snakes that are responsible for most snakebite fatalities in India. Understanding how to identify these snakes can be life-saving.",
      "## 1. Indian Cobra (Nag)",
      "The Indian Cobra is perhaps the most recognized venomous snake. Key identification features include:",
      "- **Hood**: When threatened, it spreads a distinctive hood with spectacle-like markings on the back",
      "- **Color**: Usually brown to black, sometimes with lighter bands",
      "- **Size**: Adults typically reach 1.5 to 2 meters in length",
      "- **Behavior**: Generally shy but will stand its ground when cornered",
      "## 2. Common Krait (Manyar)",
      "The Krait is extremely dangerous as it's often active at night when people are sleeping:",
      "- **Pattern**: Distinctive black and white bands along the entire body",
      "- **Head**: Small and not distinct from the neck",
      "- **Scales**: Smooth and shiny appearance",
      "- **Behavior**: Nocturnal, often enters homes seeking rodents",
      "## 3. Russell's Viper (Ghonas)",
      "This snake causes the most snakebite deaths in India:",
      "- **Pattern**: Three rows of dark brown spots with light edges running down the body",
      "- **Head**: Triangular and flat with prominent V-shaped marks",
      "- **Sound**: Produces a loud hissing sound when threatened",
      "- **Behavior**: Aggressive when disturbed, strikes quickly",
      "## 4. Saw-scaled Viper (Phoorsa)",
      "Despite its small size, this snake is highly dangerous:",
      "- **Size**: Small, usually 30-60 cm",
      "- **Pattern**: Wavy white lines on the back",
      "- **Sound**: Creates a rasping sound by rubbing scales together",
      "- **Behavior**: Very aggressive and quick to strike",
      "## Safety Tips",
      "- Always use a torch when walking at night, especially during monsoon",
      "- Never try to catch or kill a snake - call professional rescuers",
      "- If bitten, stay calm and get to a hospital immediately",
      "- Most snakes in Maharashtra are non-venomous and harmless",
    ],
  },
  "2": {
    title: "What to Do When You Encounter a Snake at Home",
    category: "Emergency Guide",
    author: "Amit Sawant",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    image: snakeEncounter,
    likes: 389,
    content: [
      "Finding a snake in your home can be frightening, but staying calm and following the right steps can ensure everyone's safety - including the snake's.",
      "## Step 1: Stay Calm",
      "Your first reaction might be panic, but remember:",
      "- Most snakes are non-venomous and harmless",
      "- Snakes don't want to be near you - they're probably more scared than you",
      "- Sudden movements can provoke a defensive strike",
      "## Step 2: Create Distance",
      "- Slowly back away from the snake",
      "- Keep at least 2 meters distance",
      "- Remove children and pets from the room immediately",
      "- Close the door to contain the snake in one area",
      "## Step 3: Observe from Safety",
      "If possible, try to note:",
      "- The snake's approximate size and color",
      "- Any distinctive patterns or markings",
      "- Where exactly it's located",
      "This information helps rescuers prepare for safe capture.",
      "## Step 4: Call Professional Help",
      "Contact professional snake rescuers immediately:",
      "- Pune Snake Helpline: +91 20 2612 3456",
      "- Forest Department: 1800-22-1552",
      "- Local wildlife rescue organizations",
      "## What NOT to Do",
      "- **Never try to catch or kill the snake** - this is when most bites occur",
      "- **Don't throw things at it** - this will make it aggressive",
      "- **Don't try to identify it yourself** - leave this to experts",
      "- **Don't use home remedies** if bitten - go to hospital immediately",
      "## While Waiting for Rescuers",
      "- Keep watching the snake from a safe distance",
      "- If it moves, note its new location",
      "- Keep the area quiet - loud noises stress the snake",
      "- Keep all doors and windows of the room closed",
    ],
  },
  "3": {
    title: "Common Non-Venomous Snakes in Pune - Know Your Friends",
    category: "Snake Awareness",
    author: "Wildlife Expert Team",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    image: nonVenomousSnakes,
    likes: 278,
    content: [
      "Not all snakes are dangerous! In fact, most snakes you'll encounter in Pune are harmless and actually beneficial. They help control rodent and pest populations.",
      "## 1. Indian Rat Snake (Dhaman)",
      "The most commonly seen snake in urban Pune:",
      "- **Size**: Can grow up to 2.5 meters - often mistaken for cobra due to size",
      "- **Color**: Olive brown to yellowish with faint black bands",
      "- **Behavior**: Fast-moving, excellent climber, completely harmless",
      "- **Benefits**: Eats rats, mice, and other rodents - a natural pest controller!",
      "## 2. Common Wolf Snake",
      "Often found inside homes at night:",
      "- **Size**: Small, 30-50 cm",
      "- **Color**: Brown with white/cream bands",
      "- **Often mistaken for**: Krait (but wolf snake has a distinct head)",
      "- **Behavior**: Nocturnal, feeds on geckos and small lizards",
      "## 3. Checkered Keelback",
      "A water-loving snake found near ponds and streams:",
      "- **Color**: Olive with black checkered pattern",
      "- **Size**: Medium, up to 1 meter",
      "- **Behavior**: Semi-aquatic, feeds on frogs and fish",
      "- **Note**: May puff up and strike when threatened, but is harmless",
      "## 4. Common Sand Boa",
      "A slow, docile snake often found in gardens:",
      "- **Color**: Brown with darker spots",
      "- **Size**: Heavy-bodied, 60-90 cm",
      "- **Behavior**: Burrowing snake, very slow and docile",
      "- **Special**: Has a blunt tail that looks like its head - a defense mechanism",
      "## 5. Trinket Snake",
      "A beautiful, harmless snake:",
      "- **Color**: Brown with distinctive black and white spots",
      "- **Size**: Up to 1.5 meters",
      "- **Behavior**: Good climber, often found in trees and roofs",
      "## Why Protect Non-Venomous Snakes?",
      "- They control rat populations naturally",
      "- They eat insects and pests",
      "- They're part of a healthy ecosystem",
      "- Many are protected under Wildlife Protection Act",
      "Remember: When in doubt, always call a rescuer. They will identify and safely relocate the snake.",
    ],
  },
  "4": {
    title: "First Aid for Snake Bites - Every Second Counts",
    category: "Emergency Guide",
    author: "Dr. Sneha Patil",
    date: "Dec 18, 2025",
    readTime: "10 min read",
    image: snakebiteFirstAid,
    likes: 512,
    content: [
      "Snake bite is a medical emergency. Knowing the correct first aid can save lives. This guide covers what to do AND what NOT to do.",
      "## Immediate Steps (DO These)",
      "### 1. Stay Calm",
      "- Panic increases heart rate, spreading venom faster",
      "- Reassure the victim and keep them calm",
      "- Have them lie down with the bite below heart level",
      "### 2. Immobilize the Affected Limb",
      "- Keep the bitten limb still and below heart level",
      "- Remove jewelry and tight clothing before swelling starts",
      "- Use a splint if available to prevent movement",
      "### 3. Clean the Wound",
      "- Gently clean the bite area with soap and water",
      "- Do not apply ice, heat, or any substances",
      "### 4. Get to Hospital IMMEDIATELY",
      "- Call emergency services or arrange transport",
      "- All government hospitals in Maharashtra stock anti-venom",
      "- Note the time of the bite",
      "## What NOT to Do (NEVER Do These)",
      "### ❌ Don't Cut the Wound",
      "Cutting does not remove venom and causes additional injury and infection risk.",
      "### ❌ Don't Suck the Venom",
      "This movie myth doesn't work and can introduce bacteria to the wound.",
      "### ❌ Don't Apply Tourniquet",
      "Tight tourniquets can cause tissue death and limb loss.",
      "### ❌ Don't Apply Ice or Heat",
      "These don't help and can cause additional damage.",
      "### ❌ Don't Give Alcohol or Medications",
      "These can interfere with hospital treatment.",
      "### ❌ Don't Try to Catch the Snake",
      "This wastes precious time and risks another bite. Doctors can treat based on symptoms.",
      "## Hospital Treatment",
      "- Anti-venom is the only effective treatment for venomous bites",
      "- It's safe and has saved millions of lives",
      "- Not all bites inject venom - doctors will assess and treat accordingly",
      "## Emergency Numbers",
      "- Ambulance: 108",
      "- Pune Civil Hospital: +91 20 2612 5555",
      "- KEM Hospital: +91 20 2612 6666",
      "Remember: Getting to a hospital quickly is more important than identifying the snake.",
    ],
  },
  "5": {
    title: "Monsoon Alert: Why Snakes Enter Homes During Rains",
    category: "Prevention",
    author: "Priya Kulkarni",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    image: monsoonSnakes,
    likes: 345,
    content: [
      "Every monsoon, snake sightings in homes increase dramatically. Understanding why this happens helps us coexist safely with these creatures.",
      "## Why Snakes Come Indoors During Monsoon",
      "### 1. Flooded Burrows",
      "- Snakes live in underground burrows and holes",
      "- Heavy rains flood these homes, forcing snakes to seek higher ground",
      "- Your home's dry floors become an attractive shelter",
      "### 2. Following Prey",
      "- Rats, frogs, and insects also seek shelter from rain",
      "- Snakes follow their food source into buildings",
      "- If you have rodents, snakes may follow",
      "### 3. Breeding Season",
      "- Many snakes breed during monsoon",
      "- They become more active searching for mates",
      "- This increases the chances of human encounters",
      "## How to Snake-Proof Your Home",
      "### Seal Entry Points",
      "- Check and seal gaps under doors",
      "- Cover drains with mesh",
      "- Fix broken window screens",
      "- Seal holes around pipes and cables",
      "### Eliminate Attractions",
      "- Control rodent populations (no food for snakes)",
      "- Clear debris and wood piles from around your home",
      "- Trim vegetation touching your walls",
      "- Don't leave pet food outside",
      "### Inside the Home",
      "- Keep rooms clutter-free (fewer hiding spots)",
      "- Check shoes, bags, and clothes before using",
      "- Use a torch at night, especially in bathrooms",
      "- Keep beds away from walls",
      "## Common Entry Points",
      "- Gaps under main door",
      "- Bathroom drain pipes",
      "- Toilet pots (keep lids closed!)",
      "- Open windows without mesh",
      "- Gaps around AC units",
      "## What to Do if a Snake Enters",
      "- Don't panic - call a professional rescuer",
      "- Keep watching from a safe distance",
      "- Don't try to handle it yourself",
      "Remember: Snakes don't want to be in your home either. They're just seeking shelter from the rain.",
    ],
  },
  "6": {
    title: "The Importance of Snake Rescue Over Killing",
    category: "Conservation",
    author: "Vikram Deshmukh",
    date: "Dec 12, 2025",
    readTime: "6 min read",
    image: snakeRelease,
    likes: 423,
    content: [
      "Every year, thousands of snakes are killed out of fear. But did you know that killing snakes is not only harmful to our ecosystem but also illegal?",
      "## The Legal Perspective",
      "### Wildlife Protection Act, 1972",
      "- ALL snakes in India are protected under this act",
      "- Killing a snake can result in:",
      "  - Up to 7 years imprisonment",
      "  - Fine up to ₹25,000",
      "- Even non-venomous snakes are protected",
      "## Ecological Importance of Snakes",
      "### 1. Rodent Control",
      "- A single snake can eat 200+ rats per year",
      "- Rats destroy crops worth crores annually",
      "- Rats spread diseases like leptospirosis and plague",
      "- Snakes are nature's free pest control",
      "### 2. Food Chain Balance",
      "- Snakes are prey for eagles, peacocks, and mongooses",
      "- Removing snakes affects these predators too",
      "- It creates an imbalance in the local ecosystem",
      "### 3. Medical Research",
      "- Snake venom is used in life-saving medicines",
      "- Blood pressure medications",
      "- Pain relief drugs",
      "- Blood clotting treatments",
      "## Why People Kill Snakes",
      "### Fear and Misinformation",
      "- Most people can't identify venomous vs non-venomous",
      "- Media portrayal creates unnecessary fear",
      "- Myths suggest snakes are revengeful (they're not!)",
      "### Lack of Awareness",
      "- Many don't know about rescue services",
      "- People don't realize snakes are protected",
      "- They think killing is the only option",
      "## Better Alternatives",
      "### Call a Rescuer",
      "- Professional rescuers safely relocate snakes",
      "- It's free in most cities including Pune",
      "- The snake is released in appropriate habitat",
      "### Snake-Proof Your Home",
      "- Prevention is better than reaction",
      "- Seal entry points during monsoon",
      "- Keep surroundings clean",
      "## The Right Approach",
      "- See a snake? Keep calm and maintain distance",
      "- Call a professional rescuer",
      "- Never try to catch or kill",
      "- Spread awareness in your community",
      "Remember: Snakes are more scared of you than you are of them. They bite only in self-defense. Let's protect these important creatures!",
    ],
  },
  "7": {
    title: "Teaching Children About Snake Safety",
    category: "Education",
    author: "Anjali Joshi",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    image: snakeRescueBasics,
    likes: 267,
    content: [
      "Children are naturally curious, and teaching them about snake safety is crucial - without creating unnecessary fear. Here's how to educate kids effectively.",
      "## Age-Appropriate Teaching",
      "### For Young Children (3-6 years)",
      "- Keep it simple: 'If you see a snake, don't touch - tell an adult'",
      "- Use picture books about snakes",
      "- Teach them snakes are living creatures, not monsters",
      "- Practice the 'freeze and call' technique",
      "### For Older Children (7-12 years)",
      "- Explain the difference between venomous and non-venomous",
      "- Teach why snakes are important for nature",
      "- Discuss what to do if a friend is bitten",
      "- Visit a zoo or wildlife center to see snakes safely",
      "## The 'Freeze and Call' Technique",
      "Teach children these simple steps:",
      "1. **FREEZE** - Stop moving immediately",
      "2. **DON'T RUN** - Running can provoke the snake",
      "3. **BACK AWAY SLOWLY** - Take slow steps backward",
      "4. **CALL AN ADULT** - Shout for help without running",
      "Practice this like a fire drill so it becomes automatic.",
      "## What Children Should Know",
      "### Do's",
      "- Always wear shoes outdoors, especially at night",
      "- Use a torch when walking in the dark",
      "- Look before putting hands in dark places",
      "- Tell an adult immediately if they see a snake",
      "### Don'ts",
      "- Never try to touch or catch a snake",
      "- Don't throw stones or sticks at snakes",
      "- Don't put hands under rocks or in holes",
      "- Never try to kill a snake",
      "## Reducing Fear, Building Respect",
      "### Positive Messages",
      "- 'Snakes help farmers by eating rats'",
      "- 'Most snakes are harmless and shy'",
      "- 'Snakes don't chase people - they prefer to hide'",
      "- 'We can share our world with snakes safely'",
      "### Avoid Negative Messages",
      "- Don't use snakes as threats ('behave or snake will bite!')",
      "- Don't show fear reactions that children will copy",
      "- Don't share gruesome snakebite stories",
      "## Fun Learning Activities",
      "- Draw and color different snakes",
      "- Watch age-appropriate wildlife documentaries together",
      "- Visit nature centers with snake exhibits",
      "- Read books about snake rescuers as heroes",
      "Teaching children to respect wildlife, including snakes, creates a generation of responsible citizens who can coexist with nature.",
    ],
  },
  "8": {
    title: "Snake-Proofing Your Garden and Compound",
    category: "Prevention",
    author: "Landscape Expert Team",
    date: "Dec 8, 2025",
    readTime: "7 min read",
    image: snakePrevention,
    likes: 198,
    content: [
      "Your garden can be both beautiful and snake-resistant. Here are practical landscaping tips to make your outdoor spaces less attractive to snakes.",
      "## Understanding What Attracts Snakes",
      "### Hiding Spots",
      "- Tall grass and overgrown vegetation",
      "- Wood piles and debris",
      "- Rock piles with gaps",
      "- Unused pots and containers",
      "### Food Sources",
      "- Rodents (attracted by bird feeders, pet food, garbage)",
      "- Frogs (near water features)",
      "- Insects and lizards",
      "### Water Sources",
      "- Leaking pipes and taps",
      "- Birdbaths and ponds",
      "- Standing water in containers",
      "## Landscaping Strategies",
      "### Lawn Maintenance",
      "- Keep grass short (under 3 inches)",
      "- Clear fallen leaves regularly",
      "- Trim hedges and bushes",
      "- Remove ground cover plants near the house",
      "### Create a Clear Zone",
      "- Maintain a 1-meter gravel or paved strip around your house",
      "- Snakes dislike crossing open areas",
      "- This 'buffer zone' makes them visible if they approach",
      "### Proper Storage",
      "- Store firewood away from the house, on raised platforms",
      "- Keep gardening tools in closed sheds",
      "- Don't leave empty pots lying around",
      "- Dispose of garden waste properly",
      "## Fencing Solutions",
      "### Snake-Proof Fencing",
      "- Use fine mesh (quarter-inch) fencing",
      "- Bury it 2-3 inches underground",
      "- Angle the top outward at 30 degrees",
      "- Height should be at least 30 inches",
      "Note: Fencing is expensive and requires maintenance, but is effective for high-risk areas.",
      "## Rodent Control",
      "The most effective snake deterrent is removing their food:",
      "- Store pet food in sealed containers",
      "- Clean up fallen bird seed",
      "- Secure garbage bins",
      "- Block entry points to your home",
      "- Consider professional pest control if you have rats",
      "## Lighting",
      "- Install motion-sensor lights around the compound",
      "- Well-lit areas deter nocturnal snakes",
      "- Check dark corners before reaching into them",
      "## Water Features",
      "If you have a pond or water feature:",
      "- Keep the surrounding area clear",
      "- Control frog populations",
      "- Consider removing it if snake sightings are frequent",
      "## What Doesn't Work",
      "- Snake repellent chemicals (no scientific evidence they work)",
      "- Ultrasonic devices (snakes don't have ears!)",
      "- Mothballs (toxic and ineffective)",
      "- Garlic or onion sprays (no effect)",
      "Focus on habitat modification - it's the only proven method.",
    ],
  },
  "9": {
    title: "Myths vs Facts: Common Snake Misconceptions",
    category: "Education",
    author: "Dr. Rajesh Gokhale",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    image: snakeConservation,
    likes: 356,
    content: [
      "India has a rich mythology around snakes, but many beliefs are scientifically incorrect. Let's separate myths from facts to better understand these creatures.",
      "## Myth 1: Snakes Drink Milk",
      "**FACT**: Snakes are reptiles and cannot digest milk. The famous 'milk miracle' happens because:",
      "- Dehydrated snakes will drink any liquid when desperate",
      "- They become sick afterward",
      "- It's actually harmful to snakes",
      "Never offer milk to snakes - it can kill them.",
      "## Myth 2: Snakes Take Revenge",
      "**FACT**: Snakes have very small brains and cannot:",
      "- Remember individual humans",
      "- Plan revenge",
      "- Track people who harmed them or their mates",
      "This is purely a movie myth. Snakes act only on instinct.",
      "## Myth 3: Snakes Dance to Music",
      "**FACT**: Snakes are deaf to airborne sounds! They:",
      "- Cannot hear the been (flute) music",
      "- Follow the movement of the instrument",
      "- Are responding to vibrations and visual cues",
      "- Are often dehydrated and stressed during performances",
      "Snake charming is illegal under the Wildlife Protection Act.",
      "## Myth 4: All Snakes Are Venomous",
      "**FACT**: Of 300+ snake species in India:",
      "- Only about 60 are venomous",
      "- Only 4 (the Big Four) cause most fatalities",
      "- Most snakes you encounter are harmless",
      "- Even venomous snakes don't always inject venom when biting",
      "## Myth 5: A Dead Snake Can Bite",
      "**FACT**: This is partially true!",
      "- Reflex actions can cause biting motions for up to an hour after death",
      "- Always handle dead snakes with caution",
      "- But they don't 'come back to life'",
      "## Myth 6: Snakes Chase Humans",
      "**FACT**: Snakes never chase humans. What seems like chasing is:",
      "- The snake fleeing toward its hiding spot (which might be behind you)",
      "- Defensive posturing before retreating",
      "- You're simply in its escape path",
      "Snakes always prefer to flee rather than confront humans.",
      "## Myth 7: Mongooses Are Immune to Venom",
      "**FACT**: Mongooses are not immune but:",
      "- Have some resistance to certain venoms",
      "- Rely on speed and agility to avoid bites",
      "- Can still die from snake bites",
      "## Myth 8: You Can Suck Out Venom",
      "**FACT**: This dangerous myth from movies:",
      "- Doesn't remove significant venom",
      "- Introduces bacteria to the wound",
      "- Wastes precious time",
      "- Can poison the person sucking if they have mouth sores",
      "Get to a hospital instead!",
      "## Myth 9: Snakes Have a Mani (Gem) in Their Head",
      "**FACT**: There is no magical gem:",
      "- This is pure folklore",
      "- Often used to justify killing snakes",
      "- No scientific basis whatsoever",
      "## Why Myths Are Dangerous",
      "- They lead to unnecessary killing of snakes",
      "- Wrong first aid can be fatal",
      "- Fear prevents people from calling rescuers",
      "- Snakes are harmed by practices like offering milk",
      "Education and awareness are our best tools against these harmful myths.",
    ],
  },
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = id ? blogData[id] : null;

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blogs">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link to="/blogs" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all articles
              </Link>
              
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                {blog.category}
              </span>
              
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{blog.likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="h-80 md:h-96 rounded-3xl overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
              {blog.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="font-heading text-2xl font-bold mt-8 mb-4 text-foreground">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="font-heading text-xl font-semibold mt-6 mb-3 text-foreground">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="text-muted-foreground ml-6 mb-2">
                      {paragraph.replace("- ", "").split("**").map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                      )}
                    </li>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph.split("**").map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                    )}
                  </p>
                );
              })}
            </article>
          </div>
        </section>

        {/* Share & Actions */}
        <section className="py-8 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Like Article
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
              <Button asChild variant="hero" size="lg">
                <Link to="/blogs">
                  Read More Articles
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="py-8 bg-destructive">
          <div className="container mx-auto px-4 text-center text-destructive-foreground">
            <div className="flex items-center justify-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-bold text-lg">Snake Emergency?</span>
            </div>
            <p>Call our 24/7 rescue helpline: <strong>+91 20 2612 3456</strong></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
