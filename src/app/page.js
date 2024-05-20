'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    async function initAndFetch() {
      const BranchSDK = (await import('branch-sdk')).default

      BranchSDK.init("key_live_ccQ8piFdCMPVysh8TLmEhghmuCk162Rr")

      BranchSDK.data(function (err, data) {
        if (err) {
          console.warn("Branch failed to resolve link")
          return;
        }

        console.log("Branch SDK initialised");
      })
    }

    initAndFetch()
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          AppleDex
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/hero-image.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
