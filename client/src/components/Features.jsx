import React from "react";
import { IoCubeSharp } from "react-icons/io5";
import { LiaFileContractSolid } from "react-icons/lia";
import { MdOutlinePendingActions } from "react-icons/md";
function Features() {
  return (
    <section class="flex flex-col items-center justify-center">
      <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class=" flex flex-col items-center justify-center text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">What makes us special</h2>

          <p class="mt-4 ">
            Our platform revolutionizes local governance using blockchain. It
            decentralizes complaints, promotes transparent communication, and
            fosters community empowerment. Through ongoing evaluation and
            accessibility, it builds trust and collaboration between citizens
            and government, offering equitable access to services.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg  p-4">
              <IoCubeSharp color="purple" size={40} />
            </span>

            <div>
              <h2 class="text-lg font-bold">Polygon DIDs</h2>

              <p class="mt-1 text-sm">
                Utilizing Polygon decentralized identifiers (DIDs) for unique
                user identification in the complaint management system. These
                DIDs ensure distinct identification and streamline complaint
                tracking processes, enhancing system efficiency and accuracy.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg  p-4">
              <LiaFileContractSolid size={40} color="purple" />
            </span>

            <div>
              <h2 class="text-lg font-bold">Smart Contract Integration</h2>

              <p class="mt-1 text-sm">
                Triggering smart contract creation upon complaint submission.
                Smart contracts automate the complaint management process,
                enforcing predefined rules for transparency and accountability
                in resolution.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg  p-4">
              <MdOutlinePendingActions size={40} color="purple" />
            </span>

            <div>
              <h2 class="text-lg font-bold">Dynamic Complaint Status Update</h2>

              <p class="mt-1 text-sm">
                Recording real-time complaint status updates as sub-blocks
                within the corresponding complaint block on the blockchain. This
                mechanism ensures transparency and accountability in complaint
                resolution progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
