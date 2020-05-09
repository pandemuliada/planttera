import React, { useContext } from 'react'
import dayjs from 'dayjs'
import { useState } from 'react'
import fs from 'fs'

import { auth, storage } from '../firebase'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

import { IconButton } from '../components/buttons'
import Tabs from '../components/Tabs'
import Panel from '../components/Panel'
import Toaster from '../components/Toaster'
import UserAccountForm from '../components/forms/UserAccountForm'
import PasswordForm from '../components/forms/PasswordForm'
import PictureForm from '../components/forms/PictureForm'

import defaultImage from '../static/images/no-image.png'
import { privateApi } from '../utils/request'

const UserProfilePage = () => {
  const { currentUser, getCurrentUser } = useContext(CurrentUserContext)
  const [isEdit, setIsEdit] = useState(false)
  const [activeTab, setActiveTab] = useState('password')

  const defaultToastState = {
    isShow: false,
    type: 'default',
    duration: 4000, // remove duration property to prevent autoclose after 4s
  }

  const [toast, setToast] = useState(defaultToastState)

  async function onCommitEditData(values) {
    const response = await privateApi().put('users/current_user/update', { ...values })

    if (response && response.data.data) {
      setIsEdit(false)
      getCurrentUser()
      setToast({
        ...toast,
        isShow: true,
        type: 'primary',
        title: 'Data Updated',
        message: 'Your data has been updated!',
      })
    }
  }

  async function onCommitChangePassword(values) {
    const response = await privateApi().put('users/current_user/change_password', { ...values })

    if (response && response.data.data) {
      setIsEdit(false)
      setToast({
        ...toast,
        isShow: true,
        type: 'primary',
        title: 'Password Updated',
        message: 'Your password has been updated!',
      })
    }
  }

  async function onCommitChangePicture(file) {
    const formData = new FormData()
    formData.append('picture', file)

    const response = await privateApi().put(`users/change_picture/${currentUser.id}`, formData)

    if (response && response.data.data) {
      setIsEdit(false)
      getCurrentUser()
      setToast({
        ...toast,
        isShow: true,
        type: 'primary',
        title: 'Picture Updated',
        message: 'Your picture has been updated!',
      })
    }
  }

  return (
    <div>
      <Toaster
        isShow={toast.isShow}
        type={toast.type}
        duration={toast.duration}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast({ ...toast, ...defaultToastState })}
      />

      <Panel title="User Account" size="small" isOpen={isEdit} onClose={() => setIsEdit(false)}>
        <div className="mb-5">
          <Tabs
            items={[
              { key: 'profile', label: 'Profile' },
              { key: 'password', label: 'Password' },
              { key: 'picture', label: 'Picture' },
            ]}
            activeTab={activeTab}
            onChangeTab={key => setActiveTab(key)}
          />
        </div>
        {activeTab === 'profile' && (
          <UserAccountForm
            initialValues={currentUser}
            onSubmit={onCommitEditData}
            onCancel={() => setIsEdit(false)}
          />
        )}
        {activeTab === 'password' && (
          <PasswordForm onSubmit={onCommitChangePassword} onCancel={() => setIsEdit(false)} />
        )}
        {activeTab === 'picture' && (
          <PictureForm
            initialImage={(!!currentUser && currentUser.picture) || defaultImage}
            onSubmit={file => onCommitChangePicture(file)}
            onCancel={() => setIsEdit(false)}
          />
        )}
      </Panel>

      <div className="flex items-center bg-white py-4 px-6 shadow mb-6 rounded">
        <h1 className="text-2xl font-medium text-gray-600">Account Detail</h1>
        <span className="ml-auto text-gray-600">{dayjs().format('dddd, MMMM D YYYY')}</span>
      </div>

      <div className="flex items-start">
        <div className="bg-white w-1/3 mr-5 py-4 px-6 shadow mb-8 rounded">
          <img
            className="mx-auto"
            src={(!!currentUser && currentUser.picture) || defaultImage}
            alt={!!currentUser ? currentUser.name : ''}
          />
        </div>
        <div className="bg-white w-2/3 py-4 px-6 shadow mb-8 rounded">
          <table className="table-auto rounded w-full">
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-3 w-24">Name</td>
                <td className="p-3">: {!!currentUser ? currentUser.name : '-'}</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 w-24">Email</td>
                <td className="p-3">: {!!currentUser ? currentUser.email : '-'}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <IconButton
              outline
              size="small"
              icon="pencil"
              onClick={() => {
                setIsEdit(true)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
