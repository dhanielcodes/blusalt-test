import React from "react";

function BroadCastIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
        fill="#E5ECF6"
      />
      <path
        d="M12 9.50001C11.5055 9.50001 11.0222 9.64663 10.611 9.92133C10.1999 10.196 9.87949 10.5865 9.69027 11.0433C9.50105 11.5001 9.45155 12.0028 9.54801 12.4877C9.64447 12.9727 9.88257 13.4181 10.2322 13.7678C10.5818 14.1174 11.0273 14.3555 11.5122 14.452C11.9972 14.5484 12.4999 14.4989 12.9567 14.3097C13.4135 14.1205 13.8039 13.8001 14.0786 13.3889C14.3534 12.9778 14.5 12.4945 14.5 12C14.5 11.337 14.2366 10.7011 13.7677 10.2322C13.2989 9.7634 12.663 9.50001 12 9.50001ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.9199 13.0824 10.7277 12.8481 10.6142 12.574C10.5006 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7295 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7073 10.5288C11.9983 10.471 12.2999 10.5007 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1667C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.3419 12.7794 13.0606 13.0607C12.7793 13.342 12.3978 13.5 12 13.5ZM16.6068 13.9463C16.392 14.4541 16.0947 14.9229 15.7268 15.3338C15.6378 15.4301 15.5144 15.4876 15.3833 15.4938C15.2522 15.5 15.1239 15.4545 15.0262 15.3669C14.9284 15.2794 14.8689 15.157 14.8606 15.026C14.8524 14.895 14.8959 14.766 14.9818 14.6669C15.6384 13.9338 16.0014 12.9844 16.0014 12.0003C16.0014 11.0163 15.6384 10.0668 14.9818 9.33376C14.9368 9.28504 14.902 9.22786 14.8792 9.16554C14.8565 9.10322 14.8465 9.037 14.8496 8.97074C14.8527 8.90449 14.869 8.83952 14.8975 8.77962C14.926 8.71972 14.9661 8.66609 15.0156 8.62185C15.065 8.57761 15.1227 8.54365 15.1854 8.52194C15.2481 8.50023 15.3144 8.49121 15.3806 8.4954C15.4468 8.49959 15.5115 8.51691 15.571 8.54635C15.6304 8.57579 15.6834 8.61676 15.7268 8.66688C16.3582 9.37334 16.776 10.2445 16.9318 11.1791C17.0876 12.1136 16.9749 13.0732 16.6068 13.9463ZM8.31247 10.4431C8.01746 11.1415 7.92698 11.9093 8.05158 12.6571C8.17617 13.4049 8.51072 14.1019 9.01622 14.6669C9.10218 14.766 9.14571 14.895 9.13742 15.026C9.12913 15.157 9.06968 15.2794 8.9719 15.3669C8.87412 15.4545 8.74585 15.5 8.61477 15.4938C8.48368 15.4876 8.36029 15.4301 8.27122 15.3338C7.45034 14.4175 6.99641 13.2305 6.99641 12.0003C6.99641 10.7701 7.45034 9.58316 8.27122 8.66688C8.35966 8.56784 8.48381 8.50799 8.61638 8.50048C8.74894 8.49298 8.87906 8.53845 8.9781 8.62688C9.07714 8.71532 9.13699 8.83947 9.1445 8.97204C9.152 9.1046 9.10653 9.23472 9.0181 9.33376C8.7231 9.66194 8.48465 10.0368 8.31247 10.4431ZM19.5 12C19.503 13.9636 18.7332 15.8495 17.3568 17.25C17.3113 17.2987 17.2565 17.3378 17.1956 17.365C17.1348 17.3922 17.0691 17.4069 17.0025 17.4083C16.9358 17.4098 16.8696 17.3979 16.8076 17.3733C16.7456 17.3488 16.6892 17.3121 16.6416 17.2654C16.594 17.2188 16.5562 17.163 16.5305 17.1016C16.5047 17.0401 16.4915 16.9741 16.4917 16.9074C16.4918 16.8407 16.5053 16.7748 16.5313 16.7134C16.5573 16.652 16.5953 16.5965 16.6431 16.55C17.8348 15.3359 18.5024 13.7025 18.5024 12.0013C18.5024 10.3 17.8348 8.66666 16.6431 7.45251C16.5499 7.35786 16.4982 7.23008 16.4993 7.09728C16.5003 6.96448 16.5541 6.83754 16.6487 6.74438C16.7434 6.65123 16.8712 6.59948 17.004 6.60054C17.1367 6.60159 17.2637 6.65536 17.3568 6.75001C18.7332 8.15053 19.503 10.0364 19.5 12ZM7.35685 16.5488C7.40289 16.5956 7.43926 16.6511 7.46386 16.712C7.48847 16.7729 7.50083 16.8381 7.50025 16.9038C7.49967 16.9695 7.48616 17.0344 7.46048 17.0949C7.4348 17.1554 7.39746 17.2102 7.3506 17.2563C7.30373 17.3023 7.24826 17.3387 7.18734 17.3633C7.12642 17.3879 7.06125 17.4002 6.99555 17.3997C6.92986 17.3991 6.86492 17.3856 6.80444 17.3599C6.74397 17.3342 6.68914 17.2969 6.6431 17.25C5.26696 15.8491 4.49591 13.9638 4.49591 12C4.49591 10.0362 5.26696 8.15096 6.6431 6.75001C6.68863 6.70133 6.74344 6.66224 6.8043 6.63505C6.86516 6.60786 6.93084 6.59311 6.99748 6.59167C7.06412 6.59023 7.13038 6.60213 7.19235 6.62668C7.25433 6.65122 7.31077 6.6879 7.35836 6.73458C7.40595 6.78125 7.44373 6.83697 7.46947 6.89846C7.49522 6.95994 7.5084 7.02595 7.50826 7.09261C7.50812 7.15927 7.49465 7.22523 7.46865 7.2866C7.44265 7.34798 7.40463 7.40354 7.35685 7.45001C6.16514 8.66416 5.4975 10.2975 5.4975 11.9988C5.4975 13.7 6.16514 15.3334 7.35685 16.5475V16.5488Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}

export default BroadCastIcon;
