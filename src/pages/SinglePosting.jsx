import { useParams } from "react-router-dom";
const SinglePosting = () => {
    let jobTitle = useParams();
    let title = jobTitle.title.split('_').join(' ');
    const volunteerData = [
      {
        Id: 1,
        type: "volunteer",
        urgency: "None",
        title: "Pack and Distribute Food",
        organization: "The Salvation Army of Greater New York",
        date: "Thu Mar 6 2025",
        time: "10AM - 1PM",
        location: "Brooklyn",
        description:
          "Pack and distribute food to clients, who bring their bags and carts or help clients. Also, assist in unwrapping food in the food pantry.",
      },
      {
        Id: 2,
        type: "volunteer",
        urgency: "Urgent",
        title: "Distribute Farm Fresh Grocery Boxes",
        organization: "The Connected Chef",
        date: "Thu Mar 6 2025",
        time: "12PM - 2PM",
        location: "Queens",
        description:
          "Use your Spanish and/or Mandarin language skills as you hand out grocery boxes to the community.",
      },
      {
        Id: 3,
        type: "volunteer",
        urgency: "Mid",
        title: "Mend Coats for New Yorkers",
        organization: "New York Cares, Inc.",
        date: "Thu Mar 6 2025",
        time: "2PM - 4PM",
        location: "Manhattan",
        description:
          "Are you a sewing savant or have a needlepoint hobby? We have many coats in excellent condition that need a little TLC before heading out the door.",
      },
      {
        Id: 4,
        type: "volunteer",
        urgency: "High",
        title: "Repack Produce",
        organization: "City Harvest",
        date: "Thu Mar 6 2025",
        time: "2PM - 4:30PM",
        location: "Brooklyn",
        description:
          "Repack produce and other food items into family-sized bags that will later be distributed to the community.",
      },
      {
        Id: 5,
        type: "volunteer",
        urgency: "None",
        title: "Pack and Distribute Food",
        organization: "The Salvation Army of Greater New York",
        date: "Thu Mar 6 2025",
        time: "10AM - 1PM",
        location: "Brooklyn",
        description:
          "Pack and distribute food to clients, who bring their bags and carts or help clients. Also, assist in unwrapping food in the food pantry.",
      },
      {
        Id: 6,
        type: "volunteer",
        urgency: "Urgent",
        title: "Distribute Farm Fresh Grocery Boxes",
        organization: "The Connected Chef",
        date: "Thu Mar 6 2025",
        time: "12PM - 2PM",
        location: "Queens",
        description:
          "Use your Spanish and/or Mandarin language skills as you hand out grocery boxes to the community.",
      },
      {
        Id: 7,
        type: "volunteer",
        urgency: "Mid",
        title: "Mend Coats for New Yorkers",
        organization: "New York Cares, Inc.",
        date: "Thu Mar 6 2025",
        time: "2PM - 4PM",
        location: "Manhattan",
        description:
          "Are you a sewing savant or have a needlepoint hobby? We have many coats in excellent condition that need a little TLC before heading out the door.",
      },
      {
        Id: 8,
        type: "volunteer",
        urgency: "High",
        title: "Repack Produce",
        organization: "City Harvest",
        date: "Thu Mar 6 2025",
        time: "2PM - 4:30PM",
        location: "Brooklyn",
        description:
          "Repack produce and other food items into family-sized bags that will later be distributed to the community.",
      },
    ];
    volunteerData.forEach((job) => {
      if (job.title === title) {
        console.log(job);
      }
    });
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}
export default SinglePosting 