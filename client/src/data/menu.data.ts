import { AiFillFlag, AiFillNotification, AiFillVideoCamera } from "react-icons/ai";
import { BsBookFill, BsFillBagFill, BsFillBriefcaseFill, BsFillCalendarEventFill, BsFillPeopleFill } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";

export const leftMenuData = [
  {
    category: "Social",
    items: [
      {
        name: "Campus",
        Icon: "campus",
        description:
          "A unique exclusive space for college students on Facebook.",
      },
      {
        name: "Events",
        Icon: "events",
        description:
          "Organize or find events and other things to do online and nearby.",
      },
      {
        name: "Find Friends",
        Icon: "friends",
        description: "Search for friends or people you may know.",
      },
      {
        name: "New Feeds",
        Icon: "feed",
        description: "See relevant posts from people and pages you follow.",
      },
      {
        name: "Pages",
        Icon: "pages",
        description: "Discover and connect with business on Facebook.",
      },
    ],
  },
  {
    category: "Entertainment",
    items: [
      {
        name: "Gaming Video",
        Icon: "gaming",
        description:
          "Watch and connect with your favorite games and streamers.",
      },
      {
        name: "Play Games",
        Icon: "play",
        description: "Play your favorite games.",
      },
      {
        name: "Watch",
        Icon: "watch",
        description:
          "A video destination personalized to your interests and connections.",
      },
    ],
  },
  {
    category: "Shopping",
    items: [
      {
        name: "Facebook Pay",
        Icon: "pay",
        description:
          "A seamless, secure way to pay on the apps you already use.",
      },
      {
        name: "Marketplace",
        Icon: "marketplace",
        description: "Buy and sell in your community.",
      },
    ],
  },
  {
    category: "Personal",
    items: [
      {
        name: "Recent Ad Activity",
        Icon: "recent",
        description: "See all the ads you interacted with on Facebook.",
      },
      {
        name: "Memories",
        Icon: "memories",
        description: "Browse your old photos, videos and posts on Facebook.",
      },
      {
        name: "Saved",
        Icon: "saved",
        description: "Find posts, photos and videos that you saved for later.",
      },
      {
        name: "Weather",
        Icon: "weather",
        description:
          "Check your local forecast and sign up for daily weather notifications.",
      },
    ],
  },
  {
    category: "Professional",
    items: [
      {
        name: "Ads",
        Icon: "ads",
        description: "Create, manage and track the performance of your ads.",
      },
      {
        name: "Jobs",
        Icon: "jobs",
        description: "Find a job that's right for you.",
      },
    ],
  },
  {
    category: "Community Resources",
    items: [
      {
        name: "Climate science center",
        Icon: "climate",
        description: "Learn about climate change and its effects.",
      },
      {
        name: "COVID-19 Information Center",
        Icon: "covid",
        description:
          "See the latest prevention tips, community resources and updates from health organizations.",
      },
      {
        name: "Community Help",
        Icon: "community",
        description:
          "Get involved in your community by creating a drive, requesting or offering help or volunteering.",
      },
      {
        name: "Fundraisers",
        Icon: "fundraisers",
        description:
          "Donate and raise money for nonprofits and personal causes.",
      },
    ],
  },
  {
    category: "More from Meta",
    items: [
      {
        name: "Messenger",
        Icon: "messenger",
        description: "Chat instantly with your friends and connections.",
      },
      {
        name: "Messenger Kids",
        Icon: "messkids",
        description: "Let kids message with close friends and family.",
      },
    ],
  },
];

export const rightMenuData = [
  {
    name: "Post",
    Icon: IoCreate,
  },
  {
    name: "Story",
    Icon: BsBookFill,
  },
  {
    name: "Room",
    Icon: AiFillVideoCamera,
  },
  {
    name: "Page",
    Icon: AiFillFlag,
  },

  {
    name: "Ad",
    Icon: AiFillNotification,
  },
  {
    name: "Group",
    Icon: BsFillPeopleFill,
  },
  {
    name: "Event",
    Icon: BsFillCalendarEventFill,
  },
  {
    name: "Marketplace Listing",
    Icon: BsFillBagFill,
  },
  {
    name: "Job",
    Icon: BsFillBriefcaseFill,
  },
];
