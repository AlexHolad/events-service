import Button from "../../components/Button.component/Button";
import "./AddEventForm.css"

const AddEventForm = () => {
  let formData = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClear = () => {

  }

  return (
    <div className="container__form">
      <form action="submit" className="form container">
        <label htmlFor="title">Название</label>
        <input type="text" id="title" placeholder="Название события" />
        <label htmlFor="location">Место проведения</label>
        <input type="text" id="location" />
        <label htmlFor="data">Дата</label>
        <input type="date" id="data" />
        <label htmlFor="time">Время проведения</label>
        <input type="time" id="time" />
        <label htmlFor="img">Загрузить изображение</label>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={(e) => formData.append("image", e.target.files[0])}
        />
        <label htmlFor="dsec">Описание</label>
        <input type="text" id="desc" />
        <Button type="submit">{"Добавить"}</Button>
        <Button action={handleClear}>{"Назад"}</Button>
      </form>
    </div>
  );
};

export default AddEventForm;
