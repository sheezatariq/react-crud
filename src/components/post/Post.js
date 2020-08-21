import React, { useEffect, useState } from 'react' ;
import { Row, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Button from '../../common/Button';
import { getPost, deletePost } from '../../actions/postActions';
import ConfirmModal from '../../common/ConfirmModal';
import ActionsDropDown from '../../common/ActionsDropDown';

const Post = ({ history, post: { get_post}, getPost, deletePost }) => {
 
  const columns = [
    { label: 'Post Text', field: 'text', sort: 'asc' },
    { label: 'Date', field: 'date', sort: 'asc' },
    { label: 'Post User', field: 'user', sort: 'asc' },
    { label: 'Actions', field: 'actions' },
  ];

  const [data, setData] = useState({
    columns: columns,
    rows: ''
  });

  const [firstShown, setFirstShown] = useState(true);

  const [firstDataShown, setFirstDataShown] = useState(true);

  const [modalData, setModalData] = useState({
    modalMessage: '',
    id: '',
    modalShow: false
  });

  const { modalMessage, _id, modalShow } = modalData;

  const handleDelete = _id => {
    setModalData({
      modalShow: true,
      _id,
      modalMessage: 'Do you really want to delete it?'
    });
  };

  const handleConfirmModalClose = () => {
    setModalData({ ...modalData, modalShow: false });
  };

  const handleModalSubmit = () => {
    deletePost(_id,history);
    handleConfirmModalClose();
  };

  useEffect(() => {
    if(firstShown) {
      getPost();
      setFirstShown(false);
    };
    if(firstDataShown && get_post) {
      setData({
        columns: columns,
        rows: get_post.map(post => {
          return{
            ...post,
            actions: <ActionsDropDown
                      handleDelete={() => handleDelete(post?._id)}
                    />
          };
        })
      });
      setFirstDataShown();
    };
  },[getPost, get_post, history, columns, firstShown, firstDataShown ])

  return (
    <>
      <Card.Body>
        <Row className="mb-3 ml-1">
          <Button
            label="Create Post"
            className="button"
            handleSubmit= {() => history.push("/dashboard/post/create")}
          />
        </Row>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
       <ConfirmModal
          messageString={modalMessage}
          show={modalShow}
          handleClose={handleConfirmModalClose}
          handleModalSubmit={handleModalSubmit}
        />
      </Card.Body>
   </>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost, deletePost })(Post);