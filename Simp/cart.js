document.addEventListener('DOMContentLoaded', function() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const optionContainers = document.querySelectorAll('.options');
  const optionBtns = document.querySelectorAll('.option-btn');
  const responseContent = document.querySelector('.response-content');
  const responseCard = document.querySelector('.response-card');
  
  // Category switching
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active category button
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding options
      optionContainers.forEach(container => {
        container.classList.remove('active');
        if (container.classList.contains(category)) {
          container.classList.add('active');
        }
      });
      
     document.addEventListener('DOMContentLoaded', function () {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html'; // change to your desired logout destination
  });
});

      // Reset response content
      responseContent.innerHTML = `
        <h2>We're here for you</h2>
        <p>Select an option above to get personalized support and advice.</p>
      `;
    });
  });
  
  // Option button clicks
  optionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const responseType = this.dataset.response;
      const responseText = getResponseText(responseType);
      
      // Animate the response card
      responseCard.style.animation = 'none';
      setTimeout(() => {
        responseCard.style.animation = 'pulse 0.5s ease';
      }, 10);
      
      // Update response content
      responseContent.innerHTML = responseText;
    });
  });
  
  // Response texts
  function getResponseText(type) {
    const responses = {
      sad: {
        title: "It's okay, you and your feelings are valid",
        message: "Allow yourself to feel it without judgment or trying to holding it back. Remember that this feeling is temporary and huhupa rin ang lahat. You're not alone in this, kasama mo ako palagi."
      },
      anxious: {
        title: "Anxiety can feel overwhelming",
        message: 
        "Hi lablab Gusto ko lang sabihin na andito lang ako palagi para sa iyo no matter what Kahit anong pagdadaanan mo hindi kita iiwan I believe in you — sa strength mo sa puso mo at sa galing mong harapin kahit gaano ka challenging ang buhay minsanPlease do not pressure yourself masyado ha It is okay to rest to pause to breathe You do not always have to have everything figured out Isa isa lang and I will be here cheering you on every step of the wayI am so proud of you lablab Keep going but do not forget to be kind to yourself too Love you always"

      },
      angry: {
        title: "Your anger is valid",
        message: "lablabb okay lang magalit ka normal lang yan huwag mong pigilan ang nararamdaman mo valid yan andito ako kahit hindi mo sabihin handa akong makinig kahit tahimik ka hindi ako lalayo."
      },
      lonely: {
        title: "Hindi ka nag iisa",
        message: "lablabb alam kong minsan parang mag isa ka lang o walang nakakaintindi sayo pero hindi ka nag iisa andito ako palagi hindi lang bilang partner kundi bilang karamay at sandalan mo."
      },
      overwhelmed: {
        title: "One step at a time",
        message: "Break things down into smaller, manageable tasks. Focus on just the next right thing. It's okay to ask for help when you need it. Remember to breathe - you've handled difficult situations before and you can handle this too."
      },
      happy: {
        title: "Celebrate your happiness!",
        message: "lablabb seeing you happy makes me so happy too i want you to smile and laugh every day you deserve all the joy in the world and i love seeing you shine."
      },
      school: {
        title: "Schoolworks stress are challenging",
        message: "Set clear boundaries between work and personal time. Prioritize your tasks and don't hesitate to delegate when possible. Remember that your worth isn't defined by productivity. Small breaks throughout the day can significantly reduce stress. lablabb i know school can be so tough and stressful but hang in there you are doing amazing even if it does not feel like it you are making progress and i am proud of you"
      },
      relationships: {
        title: "Relationships can be complicated",
        message: "Healthy relationships require communication and boundaries. It's okay to express your needs. Remember that you can't control others' actions, only your responses. Sometimes the most loving thing is to walk away from toxic situations. Hindi ka Peace and Order para ayusin lahat ha"
      },
      health: {
        title: "Your health matters",
        message: "Listen to your body and honor its needs. Small, consistent steps toward better health add up. Don't compare your journey to others. Your feelings are real and it is okay to not be okay sometimes take your time to rest and heal i am here without judgment ready to support you and hold you close."
      },
      financial: {
        title: "Money worries are stressful",
        message: "Start by assessing your situation without judgment. Create a simple budget focusing on essentials first. Small changes can make a big difference over time. Remember that your value as a person isn't defined by your ipon or kayang i-provide as of the moment."
      },
      future: {
        title: "The future feels uncertain",
        message: "Focus on what you can control today. Make small steps toward your goals. Uncertainty is part of life's journey, you've navigated it before and you can do it again. Lablabb it is okay to feel scared about the future even if it is uncertain what matters most is that we face it side by side i want to be with you through everything no matter where life takes us. Sometimes the most beautiful paths emerge from uncertainty."
      },
      'Confidence': {
        title: "You are worthy",
        message: "Your worth isn't conditional on achievements or others' opinions. lablabb you are so talented kind and strong even if you dont always see it i believe in you completely and i love you just the way you are. Be patient with yourself."
      },
      motivation: {
        title: "Motivation comes and goes",
        message: " Focus on just the first step. Celebrate tiny wins. Remember why this matters to you. lablabb it is okay to feel tired or unmotivated sometimes you are not lazy you just need a break and i will be here cheering you on when you are ready to try again."
      },
      procrastination: {
        title: "Procrastination is common",
        message: "dont be too hard on yourself we all delay things sometimes just take small steps forward when you can and remember progress is progress no matter how slow. Progress not perfection is the goal."
      },
      comparison: {
        title: "Comparison steals joy",
        message: "Everyone's journey is unique. Focus on your own progress. Anything na nakikita natin sa iba and Social media often shows highlight reels, not reality lalo na tiktok fyp. Practice gratitude for how far you've come. Your path has value exactly as it is."
      },
      perfectionism: {
        title: "Perfection is an illusion",
        message: "Done is better than perfect. Mistakes are how we learn and grow. Ask yourself: 'Would I judge a friend this harshly?' Progress happens outside comfort zones. You are enough exactly as you are."
      },
      boundaries: {
        title: "Boundaries are healthy",
        message: "Your needs matter. 'No' is a complete sentence. Start small and be consistent. Boundaries protect your energy and relationships. Those who matter will respect them. Iwas na maging people pleaser ha"
      },
      change: {
        title: "Change is barya",
        message: "Start with small changes to build confidence. Focus on what you're gaining, not just losing. Growth happens outside comfort zones. You've adapted before and you can do it again. Nandito lang naman ako palagi, mahal"
      }
    };
    
    return `
      <h2>${responses[type].title}</h2>
      <p>${responses[type].message}</p>
    `;
  }
});
