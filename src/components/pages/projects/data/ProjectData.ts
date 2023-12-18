import { Project } from "../model/Project";

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Insect Classifier',
        simpleDescription: 'A CNN based insect classifier, built with TensorFlow',
        detailedDescription: [
            'A CNN based insect classifier, built with TensorFlow',
            '80% accuracy for 12 types of insects recognition',
            'Techniques applied to avoid overfitting',
        ],
        imageUrl: '/images/Projects/Insect_Classifier/1.png',
        isLiveAvailable: false,
        isCodeAvailable: true,
        liveUrl: 'http://project-one-live-url.com',
        repoUrl: 'https://github.com/eipi717/Insect-Classifier',
    },
    {
        id: 2,
        title: 'Lesson Booking System',
        simpleDescription: 'A lesson booking system with recommended lesson, built with Typescript, Java and Python',
        detailedDescription: [
            'A list view to view all bookings',
            'Sync all data to MySQL database',
            'A form to create a new booking',
            'A detail view to view the details of a lesson',
            'Recommended lessons based on user\'s preference'
        ],
        imageUrl: '/images/Projects/Lesson_Booking_System/1.png',
        isLiveAvailable: false,
        isCodeAvailable: true,
        liveUrl: 'http://project-two-live-url.com',
        repoUrl: 'https://github.com/eipi717/BookingSystemAPI',
    },
    {
        id: 3,
        title: 'Waste Management Vehicle',
        simpleDescription: 'A vehicle armed to collect different kind of garbages, built with Jetson Nano and Arduino',
        detailedDescription: [
            'Collect the recognized target successfully',
        ],
        imageUrl: '/images/Projects/Waste_Management_Vehicle/1.png',
        isLiveAvailable: true,
        isCodeAvailable: false,
        liveUrl: 'https://drive.google.com/file/d/1uJjILc0tWcQWWN7kShrTcml6qrA9YVBX/view?usp=share_link',
        repoUrl: 'https://github.com/eipi717/BookingSystemAPI',
    },
];

export default projectsData;
