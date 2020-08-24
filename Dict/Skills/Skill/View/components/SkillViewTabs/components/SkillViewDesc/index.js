import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    content: {
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
    },
    title: {
      "& h5": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#000000',
      }
    },
    text: {
      "& p": {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#000000',
      }
    },
  });
  
const SkillViewDesc = (props) => {
    const {content, title, text } = useStyles();

//   useEffect(() => {
//     props.getSkill();
//   }, []);

//   const goBack = () => {
//       props.history.goBack();
//   }


  return (
      <div className={content}>
            <div className={title}>
                <h5>Описание</h5>
            </div>
            <div className={text}>
              <p>
                Пекарь производит широкий ассортимент хлеба, хлебобулочных и кондитерских изделий,
                соединяя ингредиенты согласно рецептам.
                <br />
                <br />
                Для получения безупречного продукта пекарь
                должен досконально знать состав пекарских изделий и помнить оптимальную температуру
                и время обработки всех ингредиентов. Чтобы добиться выдающихся результатов в отведенные
                нормы времени, помимо умения работать эффективно и бережливо необходимо обладать еще
                и художественными способностями и проявлять внимание к мелочам. Пекари выполняют
                свою работу в соответствии с высокими стандартами гигиены питания и безопасности,
                хорошо знают, как изменять состав рецептов и как адаптироваться к новым вкусам и
                обстановке.
                <br />
                <br />
                 Большинство пекарей задействованы в розничных и промышленных пекарнях,
                продовольственных и оптовых магазинах, в ресторанах. Наилучшие перспективы при поиске
                работы имеют пекари с многолетним стажем работы,
                что обусловлено растущим спросом на деликатесные выпечные изделия.
              </p>
            </div>
      </div>
  );
};

// const mapStateToProps = state => ({
//     skill: state.skill.skillAll
// });

// const mapDispatchToProps = dispatch => ({
//     getSkill: () => {
//     dispatch(getSkillAllAction());
//   }
// });

export default SkillViewDesc;
