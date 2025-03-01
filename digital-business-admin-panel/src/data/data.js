import { format, addDays } from "date-fns";

// * Formatted Date
export const formattedDate = format(new Date(), "EEEE, d MMMM yyyy"); // Example: "Saturday, 1 March 2025"

// * Cards Data
export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];

// * Orders Data
export const ordersData = [
  {
    name: "Skateboard",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Illustration",
    items: 12,
    change: 72,
  },
  {
    name: "Office Collaboration",
    type: "Illustration",
    items: 7,
    change: 70,
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15,
  },
];

// * Format Numbers with Grouping
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};

// * Calendar Events
const todayStr = format(new Date(), "yyyy-MM-dd"); // Example: "2025-03-01"

export const INITIAL_EVENTS = [
  {
    id: crypto.randomUUID(),
    title: "Lunch Party",
    start: `${todayStr}T09:00:00`,
  },
  {
    id: crypto.randomUUID(),
    title: "Timed event",
    start: `${format(addDays(new Date(), 1), "yyyy-MM-dd")}T16:00:00`,
  },
  {
    id: crypto.randomUUID(),
    title: "Head Meetup",
    start: `${format(addDays(new Date(), 2), "yyyy-MM-dd")}T20:00:00`,
  },
  {
    id: crypto.randomUUID(),
    title: "VC Meeting",
    start: `${format(addDays(new Date(), 3), "yyyy-MM-dd")}T09:00:00`,
  },
  {
    id: crypto.randomUUID(),
    title: "Payment Schedules",
    start: `${format(addDays(new Date(), 5), "yyyy-MM-dd")}T13:00:00`,
  },
  {
    id: crypto.randomUUID(),
    title: "VC Meeting",
    start: `${format(addDays(new Date(), 6), "yyyy-MM-dd")}T13:00:00`,
  },
];

// * Tasks Board Data
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration",
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers",
        },
      ],
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server-side Pagination",
        },
      ],
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states",
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description:
            "Setup react-kanban dep within Dashboard as a separate page",
        },
      ],
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters",
        },
        {
          id: 13,
          title: "Modular structure",
          description:
            "Write CSS in the form of modules to reduce naming conflicts",
        },
      ],
    },
  ],
};

// * User Table Data
export const userData = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];
export const createEventId = () => crypto.randomUUID();

