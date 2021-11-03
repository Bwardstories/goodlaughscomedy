// export const uploadImageToEventBrite = async imageData => {
//   console.log(imageData, "image Data");
//   var form = new FormData();
//   form.append(`${imageData[0].name}`, imageData[0]);
//   form.append("sample", "sample1");
//   console.log(form);
//   for (var pair of form.entries()) {
//     console.log(pair[1]);
//   }
//   let data = await axios.get(
//     `https://www.eventbriteapi.com/v3/media/upload/?type=image-event-logo`,
//     {
//       headers: {
//         "Authorization": `Bearer ${process.env.REACT_APP_MY_TOKEN}`,
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//   let post_args = await data.data.upload_data;
//   let fileKey = data.data["file_parameter_name"];
//   console.log(fileKey);
//   console.log(data);
//   console.log(form);
//   let res = await axios.post(`${data.data.upload_url}`, {
//     headers: {
//       "accept": "application/json",
//       "Accept-Language": "en-US,en;q=0.8",
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   console.log(res);
//   console.log(data);
//   console.log(data.upload_token);
//   return res;
// };

// const handleImageSelect = e => {
//   e.preventDefault();
//   setCreateEventFormData({
//     ...createEventFormData,
//     [e.target.name]: e.target.files,
//   });
// };

// <div>
//   <label htmlFor="logo_id">Select image:</label>
//   <input
//     type="file"
//     id="img"
//     name="logo_id"
//     accept="image/*"
//     onChange={e => handleImageSelect(e)}
//   />
// </div>;
