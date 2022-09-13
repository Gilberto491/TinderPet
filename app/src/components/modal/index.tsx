import Button from "./button";

export default function Modal({position}: {position: string}) {
    return (
        <>  
            <Button
                position={position}
            />
            <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil, consectetur ut illo veniam id quisquam deserunt architecto accusamus. Maiores cupiditate nostrum tempore quae eum nemo, unde voluptas aspernatur rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id iste est suscipit laboriosam repudiandae temporibus molestias commodi odit ullam at fugiat eos quia dolor deleniti, labore nobis quod dolorum.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}