import React, { useEffect, useState } from 'react' ;
import { Row, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import Button from '../../common/Button';
import { getPost, deletePost } from '../../actions/postActions';
import ConfirmModal from '../../common/ConfirmModal';
import ActionsDropDown from '../../common/ActionsDropDown';
import ReactDataTable from 'react-data-table-component';

const Post = ({ history, post: { get_post}, getPost, deletePost }) => {

  const columns = [
    {
      name: 'POST ID',selector: '_id',sortable: true,
    },
    {
      name: 'POST TEXT', selector: 'text', wrap: true, sortable: true,
    },
    {
      name: 'USER ID', selector: 'user', wrap: true,  sortable: true,
    },
    {
      name: 'DATE', selector: 'date', wrap: true, sortable: true,
    },
    {
      name: 'ACTIONS', button: true, cell: (post) => <ActionsDropDown handleDelete={() => handleDelete(post?._id)} /> 
                                                    
    },
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
          return{ ...post,
          };
        })
      });
      setFirstDataShown();
    };
  },[getPost, get_post,  data, history, columns, firstShown, firstDataShown ])
  
  const dragFuncHandler = e => {
    const data = { id: e.target.id, Y: e.clientY };
    e.dataTransfer.setData('text/JSON', JSON.stringify(data));
    e.target.parentElement.id = 'Parent'
  }
  const dropHandler = e => {
    const data = JSON.parse(e.dataTransfer.getData('text/JSON'))
    const { id, Y } = data;
    const draggedElement = document.getElementById(id);
    const targetElement = e.target.parentElement
    if (!draggedElement || !targetElement) return;
    const parentElement = targetElement.parentNode;
    if (!parentElement || parentElement.id !== 'Parent') return;
    if (Y > e.clientY) { parentElement.insertBefore(draggedElement, targetElement) }
    else parentElement.insertBefore(draggedElement, targetElement.nextSibling)
  }
  useEffect(() => {
    const dataRow = document.getElementsByClassName('doBktq');
    for (let row of dataRow) {
      row.draggable = true;
    }
  })
  useEffect(() => {
    document.addEventListener('dragstart', dragFuncHandler)
    document.addEventListener("dragover", e => e.preventDefault())
    document.addEventListener('drop', dropHandler)
  }, [])

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
        <ReactDataTable
          title="ALL POSTS LIST"
          columns={columns}
          data={get_post}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20,]}
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

