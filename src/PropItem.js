function PropItem({ movieProp }) {
  return (
    <tbody>
      <tr>
        <td>{movieProp.name}</td>
        <td>{movieProp.createdAt}</td>
      </tr>
    </tbody>
  );
}

export default PropItem;