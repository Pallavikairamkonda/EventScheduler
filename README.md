# EventScheduler
# Event Management App

## Overview
The Event Management App is a web application designed to help users manage their daily events efficiently. It allows users to add, view, and organize events while detecting conflicts and suggesting alternative time slots.

## Features
- **Event Management**: Add events with specific start and end times along with descriptions.
- **Conflict Detection**: Automatically highlight overlapping events and provide a list of conflicts.
- **Alternative Suggestions**: Suggest alternative time slots for conflicting events within user-defined working hours.
- **User Interaction**: 
  - View events in a table or calendar format.
  - Drag and drop events to resolve conflicts.
  - Input and save working hours configuration.

## Prepopulated Example Events
- Meeting A: Start: 09:00, End: 10:30
- Workshop B: Start: 10:00, End: 11:30
- Lunch Break: Start: 12:00, End: 13:00
- Presentation C: Start: 10:30, End: 12:00

## Technology Stack
- **HTML**: Structure of the web application.
- **CSS**: Styling for the application.
- **JavaScript**: Functionality for event management and user interactions.

## File Structure
```
event-management-app
├── src
│   ├── index.html         # Structure of the web application
│   ├── styles
│   │   └── style.css      # Styles for the application
│   ├── scripts
│   │   └── app.js         # Core functionality of the application
│   └── assets              # Additional assets (images/icons)
├── package.json            # npm configuration file
└── README.md               # Documentation for the project
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Open `src/index.html` in a web browser to view the application.

## Usage Guidelines
- Add events using the provided interface.
- Drag and drop events to resolve any conflicts.
- Adjust your working hours in the settings to receive accurate conflict detection and suggestions.
