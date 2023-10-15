import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import userOne from '../../images/user/user-01.png';
import userTwo from '../../images/user/user-02.png';
import userThree from '../../images/user/user-03.png';
import userFour from '../../images/user/user-04.png';
import userFive from '../../images/user/user-05.png';

const TrialUser = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Trial Users
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Image
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Contact
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img className="h-[50px]" src={userOne} alt="user" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              User Name
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">abc@gmail.com</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">01734292932</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div>
              <span>
                <small>Start: 10/14/23</small>
              </span>
              <br />
              <span>
                <small> End: 10/14/23</small>
              </span>
            </div>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div className="flex items-center gap-2">
              <button className="text-[20px] text-success">
                <BiEdit />
              </button>
              <button className="text-[20px] text-warning">
                <IoNotificationsOutline />
              </button>
              <button className="text-[20px] text-danger">
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img className="h-[50px]" src={userFive} alt="user" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              User Name
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">abc@gmail.com</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">01734292932</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div>
              <span>
                <small>Start: 10/14/23</small>
              </span>
              <br />
              <span>
                <small> End: 10/14/23</small>
              </span>
            </div>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div className="flex items-center gap-2">
              <button className="text-[20px] text-success">
                <BiEdit />
              </button>
              <button className="text-[20px] text-warning">
                <IoNotificationsOutline />
              </button>
              <button className="text-[20px] text-danger">
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img className="h-[50px]" src={userTwo} alt="user" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              User Name
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">abc@gmail.com</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">01734292932</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div>
              <span>
                <small>Start: 10/14/23</small>
              </span>
              <br />
              <span>
                <small> End: 10/14/23</small>
              </span>
            </div>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div className="flex items-center gap-2">
              <button className="text-[20px] text-success">
                <BiEdit />
              </button>
              <button className="text-[20px] text-warning">
                <IoNotificationsOutline />
              </button>
              <button className="text-[20px] text-danger">
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img className="h-[50px]" src={userThree} alt="user" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              User Name
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">abc@gmail.com</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">01734292932</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div>
              <span>
                <small>Start: 10/14/23</small>
              </span>
              <br />
              <span>
                <small> End: 10/14/23</small>
              </span>
            </div>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div className="flex items-center gap-2">
              <button className="text-[20px] text-success">
                <BiEdit />
              </button>
              <button className="text-[20px] text-warning">
                <IoNotificationsOutline />
              </button>
              <button className="text-[20px] text-danger">
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img className="h-[50px]" src={userFour} alt="user" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              User Name
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">abc@gmail.com</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">01734292932</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div>
              <span>
                <small>Start: 10/14/23</small>
              </span>
              <br />
              <span>
                <small> End: 10/14/23</small>
              </span>
            </div>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <div className="flex items-center gap-2">
              <button className="text-[20px] text-success">
                <BiEdit />
              </button>
              <button className="text-[20px] text-warning">
                <IoNotificationsOutline />
              </button>
              <button className="text-[20px] text-danger">
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialUser;
