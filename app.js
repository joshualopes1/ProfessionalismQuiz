const SQ=[
  {
    topic:"Punctuality",diff:"easy",
    scene:"It's your first day at a summer internship. You planned to leave at 8:30 for a 9 AM start. Your roommate was in the bathroom forever. You end up leaving at 8:55 and walk in at 9:06.",
    q:"What should you do?",
    opts:[
      {l:"A",t:"Walk straight to your desk, avoid eye contact, and act like nothing happened.",type:"bad",result:"Your supervisor noticed the second you walked in. She doesn't say anything but she's already forming an opinion. Avoiding eye contact made it more obvious, not less.",tip:"Saying nothing about being late comes across as a lack of awareness. A quick acknowledgment goes a long way."},
      {l:"B",t:"Find your supervisor, tell her you're a few minutes late, give a short apology, and get to work.",type:"pro",result:"Your supervisor nods. 'Happens to everyone, just try to be early going forward.' You've already handled yourself better than most people do on their first day.",tip:"A short honest acknowledgment is always better than a long excuse."},
      {l:"C",t:"Text your supervisor from the parking lot saying you're running a few minutes behind.",type:"warn",result:"She appreciates the heads-up. You get there, apologize quickly, and start working. Good instinct overall, just keep texts professional and brief.",tip:"Giving a heads-up before you're late is a solid habit. Just keep the tone straightforward."},
      {l:"D",t:"Walk in and say 'Traffic was crazy out there' loud enough for everyone to hear, even though traffic was totally fine.",type:"bad",result:"Three people in that office drive the same route as you. One of them looks up. You make eye contact. You look away. No one brings it up but they don't forget either.",tip:"A small lie on day one isn't worth it. The truth is always easier to keep straight."}
    ]
  },
  {
    topic:"Professional appearance",diff:"easy",
    scene:"Casual Friday at your part-time job. You show up in a big hoodie, sweatpants, and slides. Your manager texts you at 9 AM saying a regional manager is stopping by at noon and asking if you can look a bit more put together.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Text back 'on it' and then do nothing because you figure your outfit is fine.",type:"bad",result:"The regional manager shows up, shakes your hand, and clocks the outfit immediately. Your manager has to explain the dress situation to someone who came to evaluate the store, not discuss dress codes.",tip:"Your outfit communicates something before you even open your mouth. Make sure it's saying the right thing."},
      {l:"B",t:"Go home on your break and change into something clean and put together.",type:"pro",result:"You come back looking completely different. Your manager gives you a nod. The regional manager has no idea there was ever a hoodie situation. Clean and simple fix.",tip:"Catching a situation early and actually doing something about it is what separates people who just mean well from people who follow through."},
      {l:"C",t:"Tuck things in and swap the slides for shoes and hope it passes.",type:"warn",result:"It doesn't fully pass but your manager sees that you tried. She keeps you toward the back during the visit. Afterward she tells you to keep a change of clothes at work just in case.",tip:"Trying to fix it is better than nothing. Planning ahead gets rid of the problem entirely."},
      {l:"D",t:"Text back 'isn't it casual Friday though?' and wait.",type:"bad",result:"Your manager does not have time to debate casual Friday right now. She calls you instead. It's a short call and not a good one.",tip:"When your manager asks you to adjust something, the professional move is to handle it, not question the policy."}
    ]
  },
  {
    topic:"Communication",diff:"medium",
    scene:"Your teammate hasn't submitted their section of a group project. It's due in 48 hours and you've texted them twice with no response. You can see they've been active on social media the whole time.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Screenshot their social media activity and post it in the group chat so everyone can see.",type:"bad",result:"Your teammate sees it. Your professor somehow also sees it. Now you have a deadline problem and a conflict problem. The group chat is tense and nothing is any closer to being done.",tip:"Calling someone out publicly almost always makes things worse even when you're right."},
      {l:"B",t:"Just do their section yourself and let your professor know they didn't contribute.",type:"warn",result:"The project gets done but your teammate gets credit they didn't earn. During the presentation your professor asks about each person's contribution and things get uncomfortable fast.",tip:"Covering for someone without talking to them first tends to backfire. It avoids the short-term conflict but creates a bigger one later."},
      {l:"C",t:"Call them or reach out a different way, be direct about the deadline, and ask when they can have it done.",type:"pro",result:"They actually pick up. They had completely lost track of the date. They get their section in six hours later. Not perfect but it's there and the project is complete.",tip:"Switching how you reach out and being specific about the deadline often works when a text didn't."},
      {l:"D",t:"Email your professor right now explaining that your teammate is holding everything up.",type:"warn",result:"Your professor asks if you've tried talking to them directly first. You have to explain the texting situation. She tells you to try one more time before she steps in. Back to square one, and now your professor knows the group can't handle its own problems.",tip:"Going to someone in authority before you've exhausted the direct option usually just delays things and makes you look like you can't handle conflict on your own."}
    ]
  },
  {
    topic:"Work ethic",diff:"easy",
    scene:"Slow Tuesday at your retail job. Your manager just stepped out for a 30-minute meeting. Your coworker immediately says 'she's gone, let's just hang out in the back for a bit.' No customers. Nobody watching.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Go to the back. It's slow and there's literally nothing to do anyway.",type:"bad",result:"Your manager comes back early. She finds both of you in the back. She doesn't yell. She just gives you that look. The one that's somehow worse than yelling.",tip:"How you act when nobody's watching is basically the definition of work ethic."},
      {l:"B",t:"Stay on the floor and find something to do, restock, clean, straighten up the displays.",type:"pro",result:"Your manager comes back to a cleaner floor than she left. She doesn't say anything today. But the next time she's making the schedule or deciding who gets more hours, she remembers who she can trust to work on their own.",tip:"Slow moments are when you either build your reputation or lose it. Most people don't realize that until it's already happened."},
      {l:"C",t:"Stay on the floor but just scroll your phone at the register the whole time.",type:"warn",result:"A customer comes in, sees you on your phone, and mentions it to your manager on the way out. Being technically present isn't the same as being professional.",tip:"There's a difference between being somewhere and actually being there."},
      {l:"D",t:"Tell your coworker you're going to stay on the floor and suggest they do the same.",type:"pro",result:"They roll their eyes but they stay. Your manager comes back and sees both of you working. Nobody gets in trouble. Your coworker actually thanks you later because they didn't want to get caught either.",tip:"Getting other people to do the right thing without making it a big deal is a quiet form of leadership."}
    ]
  },
  {
    topic:"Handling conflict",diff:"hard",
    scene:"In a group class discussion a classmate cuts you off mid-sentence, finishes your point, and gets praised by the professor for it. This is the second time he's done it. The whole class is watching.",
    q:"What do you do in this moment?",
    opts:[
      {l:"A",t:"Stare at him and say nothing. Just let the silence sit there.",type:"warn",result:"Everyone notices the stare. Your classmate looks confused. Nothing gets resolved and you spend the rest of class irritated. The silence didn't actually do anything.",tip:"Showing frustration without doing anything about it is still a reaction, and it still has consequences."},
      {l:"B",t:"Say 'I wasn't done, I was also going to add...' and finish your point.",type:"pro",result:"The professor pauses. 'Oh, go ahead.' You finish. The class noticed. Your classmate looks embarrassed. You handled it without making it into a scene.",tip:"Calmly finishing what you were saying isn't aggressive. It's just standing your ground."},
      {l:"C",t:"Let it go in the moment but talk to him after class about the pattern.",type:"pro",result:"He genuinely didn't realize he was doing it. He apologizes. It stops. You handled it without anyone having to watch.",tip:"Sometimes the best time to address something is after the moment has passed, not during it."},
      {l:"D",t:"Start doing the same thing to him every time he talks for the rest of class.",type:"bad",result:"The professor cuts you both off. Now you're both the people who interrupt each other and nobody's point is landing. You became the same problem you were trying to fix.",tip:"Doing the same thing back to someone doesn't fix the situation. It just gives you both something to be wrong about."}
    ]
  },
  {
    topic:"Ethical behavior",diff:"hard",
    scene:"High stakes final exam. Professor stepped out for a few minutes. The person next to you slides their paper in your direction on two questions you're genuinely stuck on. Nobody seems to notice.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Glance over real quick. Just for one answer. You've worked hard all semester.",type:"bad",result:"You get the answer. You also spend the next few days half-convinced the professor reviewed the footage even though she didn't. The grade ends up fine. The feeling doesn't go away as fast.",tip:"One bad call in a weak moment tends to stick with you longer than the situation itself."},
      {l:"B",t:"Keep your eyes on your paper and finish with what you actually know.",type:"pro",result:"You miss a couple questions. You still pass. When your professor writes you a recommendation at the end of the year she mentions your integrity specifically. You won't know exactly why but it's this moment.",tip:"The short-term cost of doing the right thing is almost always smaller than the long-term cost of not doing it."},
      {l:"C",t:"Quietly slide your paper back and shake your head slightly.",type:"pro",result:"They get the message. You both finish the exam. Nobody says anything about it afterward. That's it.",tip:"You don't need to make a scene to handle something right. Sometimes just a quiet no is enough."},
      {l:"D",t:"Wait until the professor comes back in and report it out loud in front of everyone.",type:"bad",result:"The whole class freezes. Your classmate's face goes pale. The professor handles it but pulls you aside after and says you could have come to her privately. You turned someone else's bad decision into a public event.",tip:"Reporting something is sometimes the right call. How and when you do it matters just as much as whether you do it."}
    ]
  },
  {
    topic:"Time management",diff:"medium",
    scene:"Big assignment due Friday. There's a concert Thursday night you've been looking forward to for months. It's Monday and you haven't started yet. You're estimating at least 12 hours of real work to do it right.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Go to the concert Thursday, stay out late, pull an all-nighter, and submit Friday morning running on no sleep.",type:"bad",result:"You submit at 5:47 AM. The assignment has incomplete sections and one paragraph that just trails off mid-thought. Your professor's feedback is short. It's not good.",tip:"Doing two things at half effort is rarely better than doing one thing well."},
      {l:"B",t:"Skip the concert entirely. Lock in. Just finish the assignment.",type:"warn",result:"You turn in great work. You're also annoyed about it all weekend. You didn't have to choose between the two, you just didn't plan early enough to avoid the choice.",tip:"Sacrificing everything isn't time management. It's just what happens when you don't plan ahead."},
      {l:"C",t:"Work seriously Monday through Wednesday, go to the concert Thursday, and do a final review Friday morning before you submit.",type:"pro",result:"You turn in strong work and saw a good show Thursday night. Worked out because you started early enough to make both happen.",tip:"Managing your time well doesn't mean cutting things out. It means starting early enough that you don't have to."},
      {l:"D",t:"Tell yourself you'll start Tuesday. Then Wednesday. Then you sit down Thursday afternoon and realize you're completely out of time.",type:"bad",result:"You're staring at a blank document Thursday evening with the concert starting in two hours. You made every decision that led to this moment and now you're out of options.",tip:"Planning without actually starting is just procrastinating with extra steps."}
    ]
  },
  {
    topic:"Accountability",diff:"medium",
    scene:"Group presentation in 10 minutes. You were supposed to bring printed copies of the slides for the whole team. You're standing outside the classroom and it just hit you that the copies are sitting in your printer at home.",
    q:"What do you do right now?",
    opts:[
      {l:"A",t:"Say nothing and hope the professor doesn't ask about printed copies.",type:"bad",result:"The professor asks for them in the first 30 seconds. Every person in your group turns to look at you at the same time. That silence is really long.",tip:"Hoping a problem you already know about disappears on its own is basically never the right call."},
      {l:"B",t:"Tell your group right now, apologize, and ask if anyone has a laptop or phone to pull the slides up.",type:"pro",result:"One person has their laptop. You present off the screen. Your professor notes in the feedback that the group adapted well. Your team gets over it before the presentation even starts because you didn't try to hide it.",tip:"Owning it fast and moving straight to a fix is how you keep a mistake from becoming a bigger deal than it needs to be."},
      {l:"C",t:"Tell them it's not a big deal and just go in without the copies.",type:"warn",result:"The professor asks. You say you forgot. She takes a couple points off. Your group is mildly annoyed. It's fine but it didn't have to happen.",tip:"Brushing something off before it's actually resolved doesn't make it go away."},
      {l:"D",t:"Tell your group the printer broke this morning and just own the printer story.",type:"bad",result:"One of your group members starts asking questions about the printer. You're now answering detailed questions about a printer that works perfectly fine and still has your slides on it.",tip:"A lie needs to be maintained. The truth is one conversation."}
    ]
  },
  {
    topic:"Respecting others",diff:"hard",
    scene:"A newer student in your study group pitches an idea that you're pretty sure won't work. Everyone else seems into it. You have a better approach and you know it.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Say 'that's not going to work' and explain your idea as the better option.",type:"bad",result:"The newer student goes quiet and barely participates the rest of the session. Your idea gets used but the group dynamic is off for the rest of the meeting. You were right about the idea and handled everything else wrong.",tip:"Being right and being respectful aren't mutually exclusive. You can do both."},
      {l:"B",t:"Say nothing, let them go with the bad idea, and plan to point it out later when it fails.",type:"bad",result:"It fails. Saying 'I told you so' in real life is somehow even less satisfying than it sounds. The group wasted time and you sat there watching it happen.",tip:"Staying quiet to protect yourself while the group goes in the wrong direction is not a neutral move. It's a choice."},
      {l:"C",t:"Ask a question like 'how would this hold up if the professor changes the prompt?' and let the group work through it.",type:"pro",result:"The group starts picking at the idea on their own and naturally ends up somewhere better. The newer student actually helps revise it. Your question did more than your opinion would have.",tip:"A good question usually lands better than a direct criticism. It lets people come to the conclusion themselves."},
      {l:"D",t:"Compliment the idea and then bring yours up as another option to consider.",type:"pro",result:"The group ends up combining parts of both ideas. The final version is stronger than either one on its own. The newer student feels included. It worked out.",tip:"Making space for more than one idea to exist often gets you to a better outcome than just pushing for yours."}
    ]
  },
  {
    topic:"Continuous growth",diff:"medium",
    scene:"Your professor has optional office hours every week. You've been getting B's and feel like you could be doing better but you've never gone because it feels a little awkward to just walk in. Your classmate who goes regularly just got the highest grade on the last exam.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Keep doing what you're doing. You've always been a B student and that's fine.",type:"bad",result:"You finish the semester with a B. Later when you need a recommendation letter from this professor you realize she has no idea who you are. The grade was okay. The missed opportunity wasn't.",tip:"When growth is free and right in front of you, choosing not to take it is still a choice."},
      {l:"B",t:"Go to office hours and bring two specific questions you actually want answered.",type:"pro",result:"Your professor is genuinely surprised. 'Nobody ever comes in with prepared questions.' She spends extra time with you. Your grade on the next exam goes up. She knows your name for the rest of the semester.",tip:"Showing up prepared turns an awkward visit into a real conversation. Most people skip it entirely."},
      {l:"C",t:"Email your professor and ask what you should be focusing on to improve.",type:"pro",result:"She writes back with specific advice and mentions you're welcome to come to office hours to go deeper. You go. The grade improves. Now you have a professor who knows who you are.",tip:"Asking for help in any form is the first step. Most people talk themselves out of it."},
      {l:"D",t:"Ask your classmate what they do differently and just copy their approach.",type:"warn",result:"Their method helps a little. But it was built around how they think, not you. And you still miss out on the direct relationship with the person who controls your grade and writes your recommendations.",tip:"Learning from people around you is useful. Going to the actual source is better."}
    ]
  }
];

const PQ=[
  {
    topic:"Punctuality & reliability",diff:"medium",
    scene:"You're the project lead. Client deadline is Monday at 9 AM. It's Friday afternoon and a team member tells you she won't have her section ready until Monday morning. There's no time for a proper review if that happens.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Tell her it's fine and just hope it comes in clean Monday morning.",type:"bad",result:"It doesn't come in clean. The client catches two errors that any review would have caught. In the debrief your manager asks why the work wasn't reviewed before it went out. 'We ran out of time' doesn't land well when you knew about the timeline Friday.",tip:"Accepting a risk you already identified and doing nothing about it is on you, not the circumstances."},
      {l:"B",t:"Contact the client Friday, let them know there may be a slight delay, and reset the expectation.",type:"pro",result:"The client responds within the hour. 'Thanks for the heads-up, Monday afternoon works.' You deliver reviewed work. The client actually mentions your communication in a follow-up note.",tip:"Giving a client a heads-up before you miss something always lands better than explaining it after."},
      {l:"C",t:"Tell your team member she has to have it done by Sunday night or she's off the project.",type:"bad",result:"She delivers Sunday. The work is rushed and the relationship is strained. Your manager hears about it. 'You needed a conversation, not an ultimatum,' she says.",tip:"Pressure without support doesn't get you good work. It gets you resentful compliance."},
      {l:"D",t:"Work through the weekend yourself to create enough buffer to review it Monday morning.",type:"warn",result:"You catch the errors in time but burned your weekend doing it. Your manager asks later why you didn't address the dependency earlier in the week. The right fix was earlier, not personal sacrifice.",tip:"Solving a planning problem by working overtime is a short-term fix that avoids the real conversation."}
    ]
  },
  {
    topic:"Professional appearance",diff:"easy",
    scene:"You've been fully remote for two years. Your company just announced quarterly in-person all-hands meetings are coming back. First one is in two weeks. You open your closet and realize most of your professional clothes either don't fit or are just outdated.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Show up in whatever fits. It's an internal meeting and everyone knows you.",type:"bad",result:"Your VP pulls you aside after. 'We have a board observer joining next quarter and I need everyone putting their best foot forward.' You didn't know that was coming. That's the point though, you should have been prepared regardless.",tip:"Internal meeting is not a dress standard. High-visibility moments show up without warning."},
      {l:"B",t:"Get a couple of updated pieces that actually fit and work for the company's environment.",type:"pro",result:"Your manager notices. 'You look sharp.' The meeting goes fine. Nobody has any idea there was a closet situation. Simple fix, real impact.",tip:"How you present yourself is part of how people experience you professionally, especially after a long stretch of being remote."},
      {l:"C",t:"Wear the nicest thing from your remote wardrobe. Clean joggers and a pressed company hoodie.",type:"bad",result:"You are the only person not in business casual. The CEO is in the room. Your manager gets a message about it from someone above her.",tip:"What feels normal when you're working from home stands out a lot more when you're in a room with leadership."},
      {l:"D",t:"Ask your manager what the dress expectation is before you overthink it.",type:"pro",result:"She sends over a dress code guide that apparently never got shared widely. You show up exactly right. So does your team because you forwarded it. One question solved the problem for everyone.",tip:"Asking before the event is almost always better than guessing or overthinking."}
    ]
  },
  {
    topic:"Communication",diff:"hard",
    scene:"Your manager sends you an <strong>urgent</strong> email on Friday evening about a critical client issue that needs immediate attention. The email is cc'd to the CEO. Your concerns about the impact are valid.",
    q:"How do you respond?",
    opts:[
      {l:"A",t:"Reply all right away with a detailed breakdown of every risk and why it can't wait until Monday. It's after hours on a Friday.",type:"bad",result:"The CEO sees a lengthy reactive email sent Friday night. Your manager calls you Monday. 'That made us look unprepared. I needed you to assess before responding.'",tip:"Urgent information requires careful timing and tone. Friday evening isn't the moment for detailed critiques."},
      {l:"B",t:"Send a brief reply acknowledging receipt and stating you'll prepare a response by Monday morning.",type:"pro",result:"Your manager and the CEO see a professional acknowledgment. Monday your analysis is thorough and constructive. The CEO notes to your manager that the team handles pressure well.",tip:"A calm acknowledgment provides reassurance and buys time to think clearly."},
      {l:"C",t:"Forward the email to your team with 'urgent - thoughts?' and let everyone chime in over the weekend.",type:"bad",result:"Your manager receives multiple panicked responses by Monday. 'Why escalate before we discussed internally?' she asks.",tip:"Sharing urgent matters without context spreads alarm rather than solutions."},
      {l:"D",t:"Spend the weekend analyzing and come in Monday with specific recommendations and a proposed action plan.",type:"pro",result:"Your manager is impressed. 'This is exactly what we needed.' Your recommendations are implemented, and the issue is resolved quickly.",tip:"Taking time to prepare a thoughtful response demonstrates professionalism under pressure."}
    ]
  },
  {
    topic:"Work ethic",diff:"hard",
    scene:"Three years into your job you've gotten comfortable. You do solid work but you haven't taken on anything new in a while. A colleague who joined 18 months ago just got assigned a high-visibility project you weren't even considered for.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Feel annoyed about it, say nothing, and just keep doing what you've been doing.",type:"bad",result:"Six months later your review comes back with a note about needing to see more initiative before advancement is on the table. The signal was there before this moment. You missed it.",tip:"Staying comfortable in a role that's moving forward is still falling behind."},
      {l:"B",t:"Ask your manager directly what you'd need to show to be in the running for projects like that.",type:"pro",result:"Your manager is glad you asked. 'Honestly you've been coasting a little. Here's what we need to see.' She gives you three specific things. You do them. Six months later you're on the next project.",tip:"Asking for the path forward is the most direct way to actually get there. Most people just wait and wonder."},
      {l:"C",t:"Start volunteering for every project available to show you're ready.",type:"warn",result:"You take on too much. Your core work suffers. Your manager pulls you in. 'I need you focused and doing things well, not spread across everything.' Volume isn't the same as value.",tip:"Showing initiative is good. Doing it without direction or judgment isn't."},
      {l:"D",t:"Bring it up with HR to make sure the oversight is on record.",type:"bad",result:"HR explains that project assignments are a management call. Your manager finds out you went to HR before talking to her. 'Why didn't you just come to me?' The conversation is now more awkward than it ever needed to be.",tip:"Going around your manager before you've talked to them is almost always the wrong order of operations."}
    ]
  },
  {
    topic:"Handling conflict",diff:"hard",
    scene:"You and a senior colleague have been disagreeing on the direction of a shared project for three weeks. The tension is showing up in team meetings now and your manager has noticed but hasn't stepped in.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Wait for your manager to handle it since she clearly sees what's going on.",type:"bad",result:"She eventually brings you both in formally. It's more uncomfortable than it would have been if you'd dealt with it two weeks ago. 'I expected you two to work this out,' she says.",tip:"Waiting for management to fix a peer problem signals that you need supervision to handle your own professional relationships."},
      {l:"B",t:"Set up a private meeting with your colleague, come in with a clear outline of where you agree and where you don't, and try to find a path forward.",type:"pro",result:"Your colleague is caught off guard by how prepared you are. You find real common ground on two things and one actual disagreement you both agree to bring to your manager together. The tension in meetings stops.",tip:"Coming into a hard conversation with structure instead of just frustration moves things forward a lot faster."},
      {l:"C",t:"Send your colleague a detailed email laying out all the problems with their approach.",type:"bad",result:"They forward it to your manager. 'This is not how we handle disagreements here,' your manager says. A written list of criticisms is permanent and forwardable. It almost always makes things worse.",tip:"Emails feel safer than real conversations but they create a record and they get forwarded."},
      {l:"D",t:"Bring your data and your case to the next team meeting and make the argument in front of everyone.",type:"warn",result:"Your points are solid. Your colleague is visibly put on the spot. The team is uncomfortable. Your manager pulls you aside after. 'Right call, completely wrong setting. That needed to happen one on one first.'",tip:"Being right in front of an audience at someone else's expense is still a problem even when the facts are on your side."}
    ]
  },
  {
    topic:"Ethical behavior",diff:"hard",
    scene:"You're putting together the quarterly report for leadership. You notice one key metric looks a lot better if you measure it from a slightly different start date. Both dates are technically defensible. The difference changes your team's result from average to strong.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Use the favorable date. Both are valid and you're not making anything up.",type:"bad",result:"Six months later a new analyst pulls the historical data and flags the inconsistency. Your VP asks about it in a leadership meeting. 'It was technically valid' is hard to defend when you're the one who benefited from the choice.",tip:"Technically defensible and actually honest are not the same thing. If you'd be uncomfortable explaining your reasoning out loud, that's a sign."},
      {l:"B",t:"Use the standard date, report the real result, and add context about what actually drove the numbers.",type:"pro",result:"Leadership appreciates the transparency and the context ends up telling a more interesting story than the number alone. Your manager tells you after: 'I was worried you'd try to spin it. I'm glad you didn't.'",tip:"Honest reporting builds trust that holds up over time. Optimized reporting tends to unravel."},
      {l:"C",t:"Put both measurements in the report and let leadership decide.",type:"warn",result:"Your VP asks why there are two numbers. The question becomes the focus of the meeting instead of anything else. Your manager tells you afterward to resolve that kind of thing before you walk into the room.",tip:"Bringing an unresolved decision to a leadership meeting signals that you didn't do your homework."},
      {l:"D",t:"Ask your manager which date to use before you finalize the report.",type:"pro",result:"She thinks it through and says standard date with context. The call is made together and documented. You didn't make a decision with ethical weight on your own.",tip:"When something has real consequences, involving your manager before you finalize it is just smart."}
    ]
  },
  {
    topic:"Time management",diff:"hard",
    scene:"It's 4:30 on Friday afternoon. You have a report due to your manager by end of day. You're 80% done but you just got an urgent request from a different manager for a quick analysis. It's something you could knock out in 30 minutes but it would mean missing your deadline.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Do the urgent request first. Deadlines are flexible but people asking for help are not.",type:"bad",result:"Your manager emails you at 5:15 asking where the report is. You explain the situation. 'I needed that for my meeting this morning,' she says. 'Next time, let me know before you reprioritize.'",tip:"Assuming your manager's deadline is flexible without checking is a risk. They might have hard dependencies you don't know about."},
      {l:"B",t:"Tell the other manager you can do it first thing Monday morning.",type:"pro",result:"They say it's not that urgent after all. You finish your report by 5:00. Your manager thanks you for getting it in on time. You do the analysis Monday and it takes 20 minutes.",tip:"Most 'urgent' requests aren't actually urgent. Offering a specific alternative time gives them a chance to reconsider."},
      {l:"C",t:"Do both. Work through your lunch break to get the report done and do the analysis after.",type:"warn",result:"You finish the report at 5:45 and the analysis at 6:15. Your manager is happy with the report but tells you next time to communicate if you're going to be late. You feel exhausted.",tip:"Working through breaks to meet multiple deadlines works sometimes but it can't be your default approach."},
      {l:"D",t:"Ask your manager if the deadline can shift by an hour.",type:"pro",result:"She says yes, she just needs it before her 8 AM meeting. You do the urgent analysis first, then finish your report by 5:30. Everyone is happy.",tip:"When you have competing priorities, checking with the person who set the deadline is usually the right move."}
    ]
  },
  {
    topic:"Accountability",diff:"hard",
    scene:"You made a mistake in a client presentation last week. It was a small error in the data but it led to a follow-up question from the client that made your team look unprepared. Your manager asked you about it privately and you said it was someone else's data.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Keep quiet. The conversation with your manager was private and the client didn't notice.",type:"bad",result:"Two weeks later your manager brings it up again. 'I checked the data source. It was yours.' She looks disappointed. 'I gave you a chance to own it and you didn't.'",tip:"Not owning your mistakes when given a private opportunity usually means they come out later in a worse way."},
      {l:"B",t:"Go to your manager and say you made a mistake in the data and you're sorry it reflected poorly on the team.",type:"pro",result:"She appreciates you coming back to own it. 'Better late than never,' she says. 'Next time, own it right away.' You feel better having cleared the air.",tip:"Owning mistakes after the fact is still better than never owning them. It shows character."},
      {l:"C",t:"Tell the team about it in your next one-on-one with your manager.",type:"warn",result:"Your manager says it's good you owned it but wishes you'd done it sooner. 'The team already moved on. Now it just looks like you're bringing up old news.'",tip:"Timing matters with accountability. Too late and it can seem like damage control."},
      {l:"D",t:"Fix the data source so it doesn't happen again and don't say anything.",type:"bad",result:"The same error shows up in next month's report. Your manager asks about it again. 'I thought we fixed this,' she says. You have to admit you knew about it.",tip:"Fixing the problem without owning the mistake doesn't address the trust issue."}
    ]
  },
  {
    topic:"Respecting others",diff:"hard",
    scene:"Your team has been working long hours on a big project. One colleague has been consistently late with their deliverables, causing delays for everyone. In a team meeting, you make a joke about their work ethic to lighten the mood.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Make the joke. Everyone laughs and it breaks the tension.",type:"bad",result:"Your colleague doesn't laugh. They look hurt. After the meeting they pull you aside. 'That wasn't funny,' they say. The team dynamic feels off for the next week.",tip:"Jokes at someone else's expense, even if they're true, usually make things worse not better."},
      {l:"B",t:"Don't make the joke. Instead, ask the team how you can help get things back on track.",type:"pro",result:"The conversation stays productive. Your colleague appreciates not being singled out. Your manager notices and tells you after: 'Good leadership there.'",tip:"When someone is struggling, offering help instead of criticism builds the team up."},
      {l:"C",t:"Make the joke but follow it up with 'Seriously though, how can we help you get caught up?'",type:"warn",result:"The joke lands badly but the follow-up helps. Your colleague says they're dealing with some personal stuff. The team rallies to help. It works out but you regret the joke.",tip:"Even with good intentions, public criticism disguised as humor can sting."},
      {l:"D",t:"Bring it up privately with your manager first.",type:"pro",result:"She says she'll handle it. The meeting stays focused on solutions. Your colleague gets the support they need without public embarrassment.",tip:"When you need to address someone's performance, doing it through the right channels protects everyone."}
    ]
  },
  {
    topic:"Continuous growth",diff:"hard",
    scene:"You've been in your role for two years. You're good at your job but you feel like you're not learning much anymore. Your performance reviews have been solid but not exceptional. A colleague mentions they're taking an online course on a new tool your company is adopting.",
    q:"What do you do?",
    opts:[
      {l:"A",t:"Sign up for the same course. It sounds useful.",type:"pro",result:"You learn the new tool and become the go-to person when it rolls out. Your manager notices and gives you more responsibility. 'I like that you're staying ahead,' she says.",tip:"Investing in your own growth pays off in ways you can't predict."},
      {l:"B",t:"Ask your manager if the company will pay for training on the new tool.",type:"warn",result:"She says yes, but only if it's directly related to your current projects. You take the course anyway on your own time. It still helps but you wish you'd asked about opportunities sooner.",tip:"Company training budgets exist but they're not unlimited. Sometimes you have to invest first."},
      {l:"C",t:"Wait and see if the company offers training when they adopt the tool.",type:"bad",result:"They do offer training but it's basic. Your colleague who took the course early becomes the expert. You end up learning from them instead of leading.",tip:"Waiting for company-provided training means you learn at the company's pace, not yours."},
      {l:"D",t:"Talk to your manager about taking on a stretch project to build new skills.",type:"pro",result:"She assigns you to a cross-functional team working on the new tool. You learn hands-on and get exposure to other parts of the business. Your next review is exceptional.",tip:"Sometimes the best growth comes from volunteering for challenging work, not just taking courses."}
    ]
  },
];

let mode=null,cur=0,sel=[],submitted=[];

function gtc(t){return t==='pro'?'rp':t==='warn'?'rw':'rb';}
const proPhrases = ["Nice", "Impressive", "Exceptional", "Very professional of you", "Excellent"];
function gtl(t, index){return t==='pro'?proPhrases[index % proPhrases.length]:t==='warn'?'Could be better':'Here is what happens';}

function setMode(m){
  mode=m;
  sel=new Array(10).fill(null);
  submitted=new Array(10).fill(false);
  cur=0;
  document.querySelectorAll('.lc').forEach(c=>c.classList.remove('act-s','act-p'));
  document.getElementById('lc-'+m).classList.add('act-'+(m==='student'?'s':'p'));
  const b=document.getElementById('sb');
  b.disabled=false;
  b.className='btn-start rdy-'+(m==='student'?'s':'p');
  b.textContent=m==='student'?'Start student level':'Start working professional level';
}

function renderIntro(){
  document.getElementById('qa').innerHTML=`
    <div style="margin-bottom:20px">
      <h2 style="font-size:17px;font-weight:700;color:#0a1f44;margin-bottom:18px;text-align:center">Pick your level</h2>
      <div class="level-cards">
        <div class="lc" id="lc-student" onclick="setMode('student')">
          <div class="lc-badge bs">Student</div>
          <div class="lc-title">New to the workforce</div>
          <div class="lc-desc">Situations set in school, internships, and part-time jobs. Some straightforward, some will trip you up.</div>
        </div>
        <div class="lc" id="lc-pro" onclick="setMode('pro')">
          <div class="lc-badge bp">Working professional</div>
          <div class="lc-title">Already working full-time</div>
          <div class="lc-desc">Real workplace situations with actual stakes. Clients, managers, teams, leadership.</div>
        </div>
      </div>
      <button class="btn-start" id="sb" disabled onclick="cur=0;sel=new Array(10).fill(null);submitted=new Array(10).fill(false);render()">Select a level to begin</button>
    </div>`;
}

function render(){
  const area=document.getElementById('qa');
  const qs=mode==='student'?SQ:PQ;
  const fc=mode==='student'?'fill-s':'fill-p';
  const ttc=mode==='student'?'ts':'tp';
  const pc=mode==='student'?'nxt-s':'nxt-p';
  const rc=mode==='student'?'refs':'refp';
  const sce=mode==='student'?'ss':'sp';
  const pickClass=mode==='student'?'picked-s':'picked';
  const subClass=mode==='student'?'sub-s':'sub-p';

  if(cur>=10){
    const proC=sel.filter((s,i)=>s!==null&&qs[i].opts[s].type==='pro').length;
    const warnC=sel.filter((s,i)=>s!==null&&qs[i].opts[s].type==='warn').length;
    const badC=sel.filter((s,i)=>s!==null&&qs[i].opts[s].type==='bad').length;
    const totalScore = proC * 1 + warnC * 0.5;
    let msg='';
    if(totalScore >= 9)msg='Excellent work!';
    else if(totalScore >= 7)msg='Good job!';
    else if(totalScore >= 5)msg='Not bad!';
    else msg='Keep practicing!';
    area.innerHTML=`
      <div style="text-align:center;padding:1rem 0">
        <div style="font-size:56px;font-weight:900;color:#0a1f44;line-height:1">${totalScore}/10</div>
        <div>${proC>0?`<span class="pill pp">${proC}</span>`:''} ${warnC>0?`<span class="pill pw">${warnC}</span>`:''} ${badC>0?`<span class="pill pbd">${badC}</span>`:''}</div>
        <p style="font-size:14px;color:#333;line-height:1.8;margin:16px auto;max-width:480px">${msg}</p>
        <div class="ref-box ${rc}"><strong>Next step</strong>Open the professionalism pamphlet and focus on the topics where you struggled.</div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px">
          <button class="btn" onclick="cur=0;sel=new Array(10).fill(null);submitted=new Array(10).fill(false);render()">Retake this level</button>
          <button class="btn" onclick="mode=mode==='student'?'pro':'student';cur=0;sel=new Array(10).fill(null);submitted=new Array(10).fill(false);render()">Try ${mode==='student'?'professional':'student'} level</button>
          <button class="btn" onclick="renderIntro()">Start Over</button>
        </div>
      </div>`;
    return;
  }

  const pct=Math.round((cur/10)*100);
  const q=qs[cur];
  const s=sel[cur];
  const isSubmitted=submitted[cur];

  const optsHTML=q.opts.map((o,i)=>`
    <div class="opt${s===i&&!isSubmitted?' '+pickClass:s===i&&isSubmitted?' '+pickClass:''}" onclick="${isSubmitted?'':' choose('+i+')'}" style="${isSubmitted&&s!==i?'opacity:0.5;cursor:default':''}">
      <div class="ol">${o.l}</div>
      <div class="ot">${o.t}</div>
    </div>`).join('');

  const submitHTML=isSubmitted
    ?`<div class="reveal ${gtc(q.opts[s].type)}">
        <div class="rtitle">${gtl(q.opts[s].type, cur)}</div>
        <div class="rbody">${q.opts[s].result}</div>
        <div class="rtip">${q.opts[s].tip}</div>
      </div>`
    :`<button class="${s!==null?'submit-btn '+subClass:'submit-btn sub-disabled'}" onclick="${s!==null?'submitAnswer()':''}">${s!==null?'Submit answer':'Pick an answer first'}</button>`;

  area.innerHTML=`

    <div class="qlabel" style="margin-top:6px">${mode==='student'?'Student':'Professional'} · Question ${cur+1} of 10</div>
    <div class="scene ${sce}">${q.scene}</div>
    <div class="qtext">${q.q}</div>
    <div class="opts">${optsHTML}</div>
    ${submitHTML}
    <div class="nav">
      <button class="btn" onclick="if(cur>0){cur--;render();}" ${cur===0?'disabled':''}>Back</button>
      ${isSubmitted?`<button class="btn ${pc}" onclick="cur++;render()">${cur===9?'See results':'Next question'}</button>`:''}
    </div>`;
}

function choose(i){
  if(submitted[cur])return;
  sel[cur]=i;
  render();
}

function submitAnswer(){
  if(sel[cur]===null)return;
  submitted[cur]=true;
  render();
}

renderIntro();

document.addEventListener('keydown', function(e) {
  if (cur >= 10) return; // Don't navigate on results page
  if (e.key === 'ArrowLeft' && cur > 0) {
    cur--;
    render();
  } else if (e.key === 'ArrowRight' && submitted[cur]) {
    cur++;
    render();
  } else if (e.key === 'ArrowUp' && !submitted[cur]) {
    if (sel[cur] === null) sel[cur] = 0;
    else if (sel[cur] > 0) sel[cur]--;
    render();
  } else if (e.key === 'ArrowDown' && !submitted[cur]) {
    if (sel[cur] === null) sel[cur] = 0;
    else if (sel[cur] < 3) sel[cur]++;
    render();
  } else if (e.key === 'Enter' && sel[cur] !== null && !submitted[cur]) {
    submitAnswer();
  }
});
