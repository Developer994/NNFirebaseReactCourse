import { useLocation } from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        quaerat quidem, natus aspernatur id nesciunt dignissimos saepe ab
        corporis sed impedit hic perspiciatis facere. Delectus voluptatum
        cupiditate numquam sint sunt consectetur. Esse a tenetur, omnis fugiat
        necessitatibus animi facere voluptas.
      </p>
    </div>
  );
}
