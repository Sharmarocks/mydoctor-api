/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("doctors").del();
  await knex("doctors").insert([
    {
      id: 1,
      name: "Dr. John Smith",
      specialization: "Cardiology",
      address: "123 Heart Avenue, Cityville",
      rating: 4.7,
      bio: "Dr. John Smith is a renowned cardiologist with over 15 years of experience...",
      image: "/docimages/doc-4.jpg", // Placeholder image path
    },
    {
      id: 2,
      name: "Dr. Emily Johnson",
      specialization: "Dermatology",
      address: "456 Skin Street, Townsville",
      rating: 4.9,
      bio: "Dr. Emily Johnson is a board-certified dermatologist specializing in skincare...",
      image: "/docimages/doc-1.jpg", // Placeholder image path
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      specialization: "Orthopedics",
      address: "789 Bone Road, Jointsville",
      rating: 4.5,
      bio: "Dr. Michael Brown is an orthopedic surgeon known for his expertise in joint replacements...",
      image: "/docimages/doc-3.jpg", // Placeholder image path
    },
    {
      id: 4,
      name: "Dr. Maria Rodriguez",
      specialization: "Pediatrics",
      address: "789 Kids Lane, Childville",
      rating: 4.8,
      bio: "Dr. Maria Rodriguez is a compassionate pediatrician dedicated to children's well-being...",
      image: "/docimages/doc-1.jpg", // Placeholder image path
    },
    {
      id: 5,
      name: "Dr. David Chen",
      specialization: "Ophthalmology",
      address: "234 Vision Road, Eyeville",
      rating: 4.6,
      bio: "Dr. David Chen is an ophthalmologist committed to improving vision health...",
      image: "/docimages/doc-4.jpg", // Placeholder image path
    },
    {
      id: 6,
      name: "Dr. Amanda White",
      specialization: "Psychiatry",
      address: "567 Mind Avenue, Psychotown",
      rating: 4.9,
      bio: "Dr. Amanda White is a psychiatrist with a holistic approach to mental health...",
      image: "/docimages/doc-1.jpg", // Placeholder image path
    },
    {
      id: 7,
      name: "Dr. Robert Taylor",
      specialization: "Dentistry",
      address: "876 Smile Street, Toothville",
      rating: 4.5,
      bio: "Dr. Robert Taylor is a skilled dentist focused on oral health and hygiene...",
      image: "/docimages/doc-5.jpg", // Placeholder image path
    },
    {
      id: 8,
      name: "Dr. Sarah Johnson",
      specialization: "Family Medicine",
      address: "123 Health Road, Careville",
      rating: 4.7,
      bio: "Dr. Sarah Johnson is a family medicine practitioner dedicated to comprehensive healthcare...",
      image: "/docimages/doc-1.jpg", // Placeholder image path
    },
    {
      id: 9,
      name: "Dr. Jane Wilson",
      specialization: "Gynecology",
      address: "987 Women's Avenue, Maternitytown",
      rating: 4.6,
      bio: "Dr. Jane Wilson is a dedicated gynecologist with a passion for women's health...",
      image: "/docimages/doc-6.jpg", // Placeholder image path
    },
  ]);
};
